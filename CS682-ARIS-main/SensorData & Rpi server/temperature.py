import glob
import time
import datetime
import logging

# Set up basic logging
logging.basicConfig(level=logging.INFO)

def read_temp_raw(device_file):
    """Reads the raw temperature data from the sensor file."""
    try:
        with open(device_file, 'r') as f:
            lines = f.readlines()
        return lines
    except FileNotFoundError:
        logging.error("Sensor file not found.")
        return None
    except Exception as e:
        logging.error(f"Error reading sensor file: {e}")
        return None

def parse_temp(device_file):
    """Parses the raw temperature data to extract the temperature."""
    lines = read_temp_raw(device_file)
    if lines is None:
        return None

    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw(device_file)
        if lines is None:
            return None

    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        return temp_c

def read_temp():
    """Main function to read the temperature from the sensor."""
    base_dir = '/sys/bus/w1/devices/'
    try:
        device_folder = glob.glob(base_dir + '28*')[0]
    except IndexError:
        logging.error("No temperature sensor found.")
        return None

    device_file = device_folder + '/w1_slave'
    temperature = parse_temp(device_file)
    if temperature is not None:
        logging.info(f"Temperature: {temperature}°C")
    else:
        logging.info("Failed to read temperature.")

if _name_ == "_main_":
    read_temp()