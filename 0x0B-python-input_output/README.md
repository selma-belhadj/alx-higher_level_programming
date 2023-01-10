
## Python - Inheritance
> Each file in this repository holds code that illustrates an essential concept of programming, specific to the Python programming language:
> opening files and safely closing them using the builtin `with`, `open`, and `read` functions with the `json` module to read and write files and serialize and deserialize objects with JSON.

### Description of what each file shows:

* **0. Read file**
  * [0-read_file.py](./0-read_file.py): Python function that prints the contents of a UTF8 text
  file to standard output.

* **1. Write to a file**
  * [1-write_file.py](./1-write_file.py): Python function that writes a string to a UTF8 text
  file and returns the number of characters written.

* **2. Append to a file**
  * [2-append_write.py](./2-append_write.py): Python function that appends a string to the end of a
  UTF8 text file and returns the number of characters appended.

* **3. To JSON string**
  * [3-to_json_string.py](./3-to_json_string.py): Python function that returns the JSON string
  representation of an object.

* **4. From JSON string to Object**
  * [4-from_json_string.py](./4-from_json_string.py): Python function that returns the Python object
  represented by a JSON string.

* **5. Save Object to a file**
  * [5-save_to_json_file.py](./5-save_to_json_file.py): Python function that writes an object to a text
  file using JSON representation.

* **6. Create object from a JSON file**
  * [6-load_from_json_file.py](./6-load_from_json_file.py): Python function that creates an object from a
  `.json` file.

* **7. Load, add, save**
  * [7-add_item.py](./7-add_item.py): Python script that stores all command line arguments to a
  Python list saved in the file `add_item.json`.

* **8. Class to JSON**
  * [8-class_to_json.py](./8-class_to_json.py): Python function that returns the dictionary
  description for simple Python data structures (lists, dictionaries, strings,
  integers and booleans).

* **9. Student to JSON**
  * [9-student.py](./9-student.py): Python class `Student` that defines a student. Includes:
    * Public instance attributes `first_name`, `last_name`, and `age`.
    * Instantiation with `first_name`, `last_name`, and `age`:
    `def __init__(self, first_name, last_name, age):`.
    * Public method `def to_json(self):` that returns the dictionary
    representation of a `Student` instance.

* **10. Student to JSON with filter**
  * [10-student.py](./10-student.py): Python class `Student` that defines a student. Builds on
  [9-student.py](./9-student.py) with:
    * Public method `def to_json(self, attrs=None):` that returns the
    dictionary representation of a `Student` instance.
    * If `attrs` is a list of strings, only the attributes listed are
    represented in the dictionary.

* **11. Student to disk and reload**
  * [11-student.py](./11-student.py): Python class `Student` that defines a student. Builds on
  [10-student.py](./10-student.py) with:
    * Public method `def reload_from_json(self, json):` that replaces all
    attributes of the `Student` instance using the key/value pairs listed in `json`.
    * The method assumes `json` is a dictionary containing attributes with
    name/value corresponding to key/value.

* **12. Pascal's Triangle**
  * [12-pascal_triangle.py](./12-pascal_triangle.py): Python function that returns a list of lists of
  integers representing Pascal's triangle of size `n`.
  * Assumes the size parameter `n` is an integer.
  * If `n` is less than or equal to `0`, returns an empty list.

* **13. Search and update**
  * [100-append_after.py](./100-append_after.py): Python function that inserts a line of text to a
  file after each line containing a specified string.

* **14. Log parsing**
  * [101-stats.py](./101-stats.py): Python script that reads lines from standard input. After
  every 10 lines or the input of a keyboard interruption (`CTRL + C`), computes the
  following metrics:
    * Total file size up that point: `File size: <total size>`
    * Status code of each read line, printed in ascending order:
    `<status code>: <number>`
  * Input format: `<IP Address> - [<date>] "GET /projects/260 HTTP/1.1"
  <status code> <file size>`
## Environment

* Language: Python 3
* OS: Ubuntu 14.04 LTS
* Compiler: python3 and gcc 4.8.4
* Style guidelines: [Pycodestyle](https://pypi.org/project/pycodestyle/)

## Getting Started

* clone the repository
`git clone git@github.com:selma-belhadj/alx-higher_level_programming.git`

* navigate to the repository
`cd alx-higher_level_programming`
* navigate to the folder
`cd 0x0B-python-input_output`

## Authors

👤 **Selma Belhadj**

* GitHub: [@selma-belhadj](https://github.com/selma-belhadj)
* Twitter: [@selma_bel_hadj](https://twitter.com/selma_bel_hadj)
* LinkedIn: [@selma-belhadj](https://www.linkedin.com/in/selma-belhadj/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/selma-belhadj/alx-higher_level_programming/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

* Hat tip to anyone whose code was used

* Inspiration
* etc
