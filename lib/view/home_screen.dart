import 'package:cloud_functions/cloud_functions.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    FirebaseFunctions functions = FirebaseFunctions.instance;
    return Scaffold(
      appBar: AppBar(
        title: const Text('functions'),
      ),
    );
  }
}
