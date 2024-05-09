import pyrealsense2 as rs
import numpy as np
import cv2
import asyncio
import websockets

async def send_frames(websocket, path):
    #Initialize the RealSense pipeline and configure streams
    pipe = rs.pipeline()
    cfg = rs.config()

    # Enable color and depth streams with specific parameters
    cfg.enable_stream(rs.stream.color, 640, 480, rs.format.bgr8, 30)
    cfg.enable_stream(rs.stream.depth, 640, 480, rs.format.z16, 30)

    # Start the RealSense pipeline
    pipe.start(cfg)

    try:
         # Continuously capture and send frames
        while True:
            # Wait for the arrival of frames
            frames = pipe.wait_for_frames()
            depth_frame = frames.get_depth_frame()
            color_frame = frames.get_color_frame()

            # Convert depth and color frames to numpy arrays for processing
            depth_image = np.asanyarray(depth_frame.get_data())
            color_image = np.asanyarray(color_frame.get_data())
            #Getting the distance of a specific pixel (center of the color frame)
            depth_intrin = depth_frame.profile.as_video_stream_profile().intrinsics
            depth_scale = pipe.get_active_profile().get_device().first_depth_sensor().get_depth_scale()
            center_x = color_frame.width // 2
            center_y = color_frame.height // 2
            depth_value = depth_frame.get_distance(center_x, center_y)
            distance = depth_value * depth_scale
            # Combine color and depth images if needed
            # merged_image = np.concatenate((color_image, depth_image), axis=1)

            # Convert the frame to a string for transmission
            frame_str = color_image.tobytes()
            depth_frame_str = depth_image.tobytes()

            # Send the frames over the WebSocket connection
            await websocket.send(frame_str)
            await websocket.send(depth_frame_str)
    finally:
        # Stop the RealSense pipeline when done
        pipe.stop()
# Configure the WebSocket server to handle the frame transmission
start_server = websockets.serve(send_frames, "localhost", 8765)

# Run the WebSocket server until interrupted
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
