import pytesseract
from PIL import Image
import pandas as pd

# Set the path for Tesseract executable
pytesseract.pytesseract.tesseract_cmd = 'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Function to extract names and registration numbers from an image
def extract_data_from_image(Sheet1):
    # Load the image from the specified path
    image = Image.open(Sheet1)
    
    # Use pytesseract to do OCR on the image
    extracted_text = pytesseract.image_to_string(image)
    
    # Split the extracted text into lines
    lines = extracted_text.splitlines()
    
    # Prepare lists for names and registration numbers
    names = []
    reg_numbers = []
    
    # Process lines to separate names and registration numbers
    for line in lines:
        # Assuming the format is "Name - REG NO" or "Name: REG NO"
        if '-' in line:
            name, reg_no = line.split('-', 1)
            names.append(name.strip())
            reg_numbers.append(reg_no.strip())
        elif ':' in line:
            name, reg_no = line.split(':', 1)
            names.append(name.strip())
            reg_numbers.append(reg_no.strip())
    
    return names, reg_numbers

# Function to save names and registration numbers to Excel
def save_data_to_excel(names, reg_numbers, List1):
    # Create a DataFrame from the names and reg_numbers lists
    df = pd.DataFrame({
        "Names": names,
        "REG NO": reg_numbers
    })
    
    # Save the DataFrame to an Excel file
    df.to_excel(List1, index=False)

# Main function
def main():
    # Path to the image file
    image_path = 'Sheet1.jpeg'  # Update with your image path
    
    # Path to save the Excel file
    excel_path = 'List1.xlsx'  # Update with your desired output file name
    
    # Extract names and registration numbers from the image
    names, reg_numbers = extract_data_from_image(image_path)
    
    # Save the extracted data to Excel
    save_data_to_excel(names, reg_numbers, excel_path)
    
    print(f"Extracted names and registration numbers saved to {excel_path}")

# Run the main function
if __name__ == "__main__":
    main()
