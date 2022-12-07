#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    if matrix is not None:
        square_matrix = matrix.copy()

        for i in range(len(matrix)):
            square_matrix[i] = list(map(lambda x: x**2, matrix[i]))

        return (square_matrix)
    return None
