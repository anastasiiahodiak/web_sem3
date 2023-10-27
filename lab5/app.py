from flask import Flask, request, jsonify

app = Flask(__name__)

class Ship:
    def __init__(self, name, tonnage, passengers):
        self.name = name
        self.tonnage = tonnage
        self.passengers = passengers

data = [
    Ship('Flower', 12, 180),
    Ship('Sun', 10, 156),
    Ship('Bird', 23, 275),
    Ship('Bird1', 20, 240),
    Ship('Bird2', 47, 310)
]

@app.route('http://127.0.0.1:5500/ships', methods=['GET'])
def get_ships():
    return jsonify([{'name': ship.name, 'tonnage': ship.tonnage, 'passengers': ship.passengers} for ship in data])

@app.route('http://127.0.0.1:5500/ships', methods=['POST'])
def add_ship():
    req_data = request.get_json()
    name = req_data.get('name')
    tonnage = req_data.get('tonnage')
    passengers = req_data.get('passengers')

    if name and tonnage and passengers:
        new_ship = Ship(name, tonnage, passengers)
        data.append(new_ship)
        return jsonify({'message': 'Ship added successfully'}), 201
    else:
        return jsonify({'error': 'Invalid input'}), 400

@app.route('http://127.0.0.1:5500/ships/<int:index>', methods=['PUT'])
def edit_ship(index):
    if 0 <= index < len(data):
        req_data = request.get_json()
        name = req_data.get('name')
        tonnage = req_data.get('tonnage')
        passengers = req_data.get('passengers')

        if name and tonnage and passengers:
            data[index].name = name
            data[index].tonnage = tonnage
            data[index].passengers = passengers
            return jsonify({'message': 'Ship edited successfully'})
        else:
            return jsonify({'error': 'Invalid input'}), 400
    else:
        return jsonify({'error': 'Invalid index'}), 404

@app.route('http://127.0.0.1:5500/ships/<int:index>', methods=['DELETE'])
def delete_ship(index):
    if 0 <= index < len(data):
        del data[index]
        return jsonify({'message': 'Ship deleted successfully'})
    else:
        return jsonify({'error': 'Invalid index'}), 404

if __name__ == '__main__':
    app.run(debug=True)
