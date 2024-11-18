#!/bin/bash

# Check if any .tex files are passed via glob
if [ $# -eq 0 ]; then
    echo "Usage: $0 <filename.tex> or use a wildcard pattern like *.tex"
    exit 1
fi

# Loop over all files passed as arguments (supporting globbing)
for filename in "$@"; do
    # Check if the file has a .tex extension
    if [[ "$filename" == *.tex ]]; then
        # Extract the base name (without extension)
        basename="${filename%.*}"
        
        echo "Processing file: $filename"

        # Run latex to generate the .dvi file
        latex "$filename"

        # Delete the .log file
        rm -f "$basename.log"

        # Run dvisvgm to convert the .dvi file to SVG
        dvisvgm --no-fonts "$basename.dvi"

        # Delete the .dvi file
        rm -f "$basename.dvi"

        echo "Process completed for $filename"
    else
        echo "Skipping non-tex file: $filename"
    fi
done
