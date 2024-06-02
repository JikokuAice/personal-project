import 'package:flutter/material.dart';
import './popUp.dart';

void main() {
  runApp(const MaterialApp(home: MyApp()));
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Color colorTheme = Color.fromRGBO(253, 231, 51, 1);
  var items = [];
  List<bool> _ischecked = [];
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(253, 239, 139, 1),
      appBar: AppBar(
        title: const Text("TODO APP"),
        centerTitle: true,
        backgroundColor: colorTheme,
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        child: ListView.builder(
            itemCount: items.length,
            itemBuilder: ((context, index) {
              return ListTile(
                title: Padding(
                  padding: const EdgeInsets.all(2.0),
                  child: Container(
                    decoration: BoxDecoration(
                        color: colorTheme,
                        borderRadius: BorderRadius.circular(15),
                        boxShadow: const [
                          BoxShadow(
                            color: Color.fromARGB(44, 21, 17, 0),
                            spreadRadius: 1,
                            blurRadius: 4,
                            offset: Offset(1, 2),
                          )
                        ]),
                    height: 80,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          items[index],
                          style: TextStyle(
                              decoration: !_ischecked[index]
                                  ? TextDecoration.none
                                  : TextDecoration.lineThrough),
                        ),
                        IconButton(
                            onPressed: () {
                              setState(() {
                                items.removeAt(index);
                              });
                            },
                            icon: Icon(Icons.delete)),
                        Checkbox(
                            value: _ischecked[index],
                            onChanged: (e) {
                              setState(() {
                                _ischecked[index] = e!;
                              });
                            })
                      ],
                    ),
                  ),
                ),
              );
            })),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showDialog(
              context: context,
              builder: (context) => Pops(
                    checked: _ischecked,
                    items: items,
                  )).then((_) {
            setState(() {}); // Refresh the state after the dialog is closed
          });
        },
        splashColor: Color.fromARGB(255, 240, 200, 4),
        backgroundColor: Color.fromRGBO(253, 231, 51, 1),
        child: const Text("add"),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }
}
