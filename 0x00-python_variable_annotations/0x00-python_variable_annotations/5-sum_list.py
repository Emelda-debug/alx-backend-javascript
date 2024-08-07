#!/usr/bin/python3
""" type-annotated function sum_list which takes a list
input_list of floats as argument and returns their sum as a float"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """function that returns the sum of a list"""

    return sum(input_list)
