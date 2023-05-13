import csv
import json

csvFilePath = './GK.csv'
jsonFilePath = './GK.json'

data = []

with open(csvFilePath, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        question = row['Questions']
        choices = {}
        for i, choice in enumerate(row['Choices'].split(',')):
            choices[str(i+1)] = choice.strip()
        answer = row['Answer']
        category = row['Category']
        difficulty = row['Level']
        media = row['Media']
        data.append({
            'question': question,
            'choices': choices,
            'answer': answer,
            'category': category,
            'difficulty': difficulty,
            'media': media
        })

with open(jsonFilePath, 'w') as jsonfile:
    json.dump(data, jsonfile, indent=2)
