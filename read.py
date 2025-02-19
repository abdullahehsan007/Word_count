import csv  # Import the CSV module

# Step 1: Create and Write Data to CSV with User Input
filename = "sample_data.csv"

data = []  # No header

print("Enter data for the CSV file. Type 'exit' to stop.")

while True:
    user_input = input("Enter data (or type 'exit' to stop): ")
    if user_input.lower() == "exit":
        break
    data.append([user_input])  # Each input goes into a new row

# Writing to CSV file
with open(filename, mode="w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)

print(f"\nCSV file '{filename}' created successfully!\n")

# Step 2: Read and Display Data from CSV
print("Reading data from CSV file:")
with open(filename, mode="r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
