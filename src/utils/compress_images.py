from PIL import Image
import os

def compress_image(input_path, output_path, target_size=1000000):
    # Open the image
    with Image.open(input_path) as img:
        # Start with quality 90
        quality = 90
        img.save(output_path, "JPEG", quality=quality, optimize=True)
        
        # Reduce quality until file size is under 1MB
        while os.path.getsize(output_path) > target_size and quality > 10:
            quality -= 5
            img.save(output_path, "JPEG", quality=quality, optimize=True)
        
        # If file is still over 1MB, resize the image
        if os.path.getsize(output_path) > target_size:
            while os.path.getsize(output_path) > target_size:
                width, height = img.size
                img = img.resize((int(width*0.9), int(height*0.9)), Image.LANCZOS)
                img.save(output_path, "JPEG", quality=quality, optimize=True)

def process_directory(input_dir, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, f"compressed_{filename}")
            compress_image(input_path, output_path)
            print(f"Compressed {filename}")

# Usage example
input_directory = "/home/randy/projects/randysim.github.io/public/photos"
output_directory = "/home/randy/projects/randysim.github.io/public/photos"
process_directory(input_directory, output_directory)
