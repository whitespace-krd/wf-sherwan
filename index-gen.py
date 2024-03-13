import os
import json

# Define the directory and the output file
directory = 'assets/book-covers/'
output_file = 'index.json'

# Initialize an empty dictionary to hold the data
data = {}

# Iterate over the files in the directory
for filename in os.listdir(directory):
    # Split the filename into parts
    parts = filename.split('-')
    year = parts[0]
    title = '-'.join(parts[1:-1])

    # If the year is not already in the data, add it
    if year not in data:
        data[year] = {
            'id': int(year),
            'books': []
        }

    # Add the book to the year
    data[year]['books'].append({
        'name': title,
        'path': f'assets/book-covers/{filename}'
    })

# Write the data to the output file
with open(output_file, 'w') as f:
    json.dump(data, f, indent=2)