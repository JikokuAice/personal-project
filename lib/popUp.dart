import 'package:flutter/material.dart';

class Pops extends StatefulWidget {
  const Pops({super.key, required this.items, required this.checked});
  final List<dynamic>? items;
  final List<bool>? checked;

  @override
  State<Pops> createState() => _PopsState();
}

class _PopsState extends State<Pops> {
  @override
  Widget build(BuildContext context) {
    final _myTextController = TextEditingController();
    return AlertDialog(
      backgroundColor: Color.fromARGB(255, 231, 231, 228),
      title: const Text("Add item"),
      content: Container(
        height: 200,
        width: 300,
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: Column(
            mainAxisSize: MainAxisSize
                .min, // To ensure the Column takes the minimum space it needs
            children: [
              TextField(
                controller: _myTextController,
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "please insert your task",
                    suffixIcon: IconButton(
                        onPressed: () {
                          _myTextController.clear();
                        },
                        icon: IconButton(
                          onPressed: () {
                            _myTextController.clear();
                          },
                          icon: Icon(Icons.clear),
                        ))),
              ),
              SizedBox(
                  height: 10), // Add some space between TextField and button
              ElevatedButton(
                style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(
                        Color.fromARGB(255, 91, 145, 238))),
                onPressed: () {
                  setState(() {
                    widget.items!.add(_myTextController.text);
                    widget.checked!.add(false);
                  });
                  Navigator.of(context).pop();
                }, // Add your onPressed function here
                child: const Text(
                  "Submit",
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
