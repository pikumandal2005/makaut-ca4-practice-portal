export const questions = [
  {
    text: "Which of the following is a method for finding the roots of a nonlinear equation?",
    options: ["Bisection method", "Trapezoidal rule", "Euler's method", "Runge-Kutta method"],
    correctAnswer: "Bisection method",
  },
  {
    text: "The Newton-Raphson method is used to find the root of the equation f(x) = 0. If the initial guess is x0, the next approximation x1 is given by:",
    options: ["x0 - f(x0) / f'(x0)", "x0 + f(x0) / f'(x0)", "x0 - f'(x0) / f(x0)", "x0 + f'(x0) / f(x0)"],
    correctAnswer: "x0 - f(x0) / f'(x0)",
  },
  {
    text: "Which of the following is an interpolation method?",
    options: ["Newton's forward difference formula", "Simpson's 1/3 rule", "Trapezoidal rule", "Euler's method"],
    correctAnswer: "Newton's forward difference formula",
  },
  {
    text: "The error that is present in the problem statement itself is called:",
    options: ["Inherent error", "Round-off error", "Truncation error", "Absolute error"],
    correctAnswer: "Inherent error",
  },
  {
    text: "Which of the following is a numerical integration method?",
    options: ["Simpson's 1/3 rule", "Regula-Falsi method", "Newton-Raphson method", "Lagrange's interpolation"],
    correctAnswer: "Simpson's 1/3 rule",
  },
  {
    text: "The number 0.0001234 in scientific notation with 4 significant digits is:",
    options: ["1.234 x 10^-4", "0.1234 x 10^-3", "1.2340 x 10^-4", "12.34 x 10^-5"],
    correctAnswer: "1.234 x 10^-4",
  },
  {
    text: "If a number is rounded to n decimal places, the absolute error is at most:",
    options: ["0.5 x 10^-n", "0.5 x 10^n", "10^-n", "10^n"],
    correctAnswer: "0.5 x 10^-n",
  },
  {
    text: "The bisection method for finding roots of an equation f(x) = 0 requires that f(x) be:",
    options: ["Continuous", "Differentiable", "Monotonic", "Algebraic"],
    correctAnswer: "Continuous",
  },
  {
    text: "The Regula-Falsi method is also known as:",
    options: ["Method of false position", "Method of chords", "Secant method", "Tangent method"],
    correctAnswer: "Method of false position",
  },
  {
    text: "The convergence of the Newton-Raphson method is:",
    options: ["Quadratic", "Linear", "Cubic", "Logarithmic"],
    correctAnswer: "Quadratic",
  },
  {
    text: "Lagrange's interpolation formula is used for:",
    options: ["Equal and unequal intervals", "Equal intervals only", "Unequal intervals only", "None of the above"],
    correctAnswer: "Equal and unequal intervals",
  },
  {
    text: "Newton's forward difference interpolation formula is used for:",
    options: ["Equal intervals", "Unequal intervals", "Both equal and unequal intervals", "None of the above"],
    correctAnswer: "Equal intervals",
  },
  {
    text: "The operator Δ is called:",
    options: ["Forward difference operator", "Backward difference operator", "Central difference operator", "Shift operator"],
    correctAnswer: "Forward difference operator",
  },
  {
    text: "The trapezoidal rule for numerical integration gives the exact value of the integral for a polynomial of degree at most:",
    options: ["1", "2", "3", "4"],
    correctAnswer: "1",
  },
  {
    text: "Simpson's 1/3 rule for numerical integration gives the exact value of the integral for a polynomial of degree at most:",
    options: ["2", "3", "4", "5"],
    correctAnswer: "2",
  },
  {
    text: "Euler's method is used to solve:",
    options: ["Ordinary differential equations", "Partial differential equations", "Systems of linear equations", "Algebraic equations"],
    correctAnswer: "Ordinary differential equations",
  },
  {
    text: "The Runge-Kutta method of order 4 is a:",
    options: ["Single-step method", "Multi-step method", "Predictor-corrector method", "None of the above"],
    correctAnswer: "Single-step method",
  },
  {
.
    text: "Gauss elimination method is used to solve:",
    options: ["Systems of linear equations", "Systems of non-linear equations", "Ordinary differential equations", "Partial differential equations"],
    correctAnswer: "Systems of linear equations",
  },
  {
    text: "The Gauss-Seidel method is an iterative method for solving:",
    options: ["Systems of linear equations", "Systems of non-linear equations", "Ordinary differential equations", "Partial differential equations"],
    correctAnswer: "Systems of linear equations",
  },
  {
    text: "Pivoting in Gauss elimination is done to avoid:",
    options: ["Division by zero", "Round-off errors", "Truncation errors", "All of the above"],
    correctAnswer: "Division by zero",
  },
  {
    text: "The condition for convergence of the Gauss-Seidel method is that the coefficient matrix is:",
    options: ["Diagonally dominant", "Symmetric", "Skew-symmetric", "Orthogonal"],
    correctAnswer: "Diagonally dominant",
  },
  {
    text: "Which of the following is a direct method for solving systems of linear equations?",
    options: ["Gauss elimination", "Gauss-Seidel", "Jacobi's method", "Relaxation method"],
    correctAnswer: "Gauss elimination",
  },
  {
    text: "Which of the following is an iterative method for solving systems of linear equations?",
    options: ["Gauss-Seidel", "Gauss elimination", "LU decomposition", "Cramer's rule"],
    correctAnswer: "Gauss-Seidel",
  },
  {
    text: "The degree of the interpolating polynomial for n data points is at most:",
    options: ["n-1", "n", "n+1", "n/2"],
    correctAnswer: "n-1",
  },
  {
    text: "The error in the trapezoidal rule is of the order:",
    options: ["h^2", "h", "h^3", "h^4"],
    correctAnswer: "h^2",
  },
  {
    text: "The error in Simpson's 1/3 rule is of the order:",
    options: ["h^4", "h^2", "h^3", "h"],
    correctAnswer: "h^4",
  },
  {
    text: "Milne's method is a:",
    options: ["Predictor-corrector method", "Single-step method", "Multi-step method", "None of the above"],
    correctAnswer: "Predictor-corrector method",
  },
  {
    text: "The number of significant digits in 3.1400 is:",
    options: ["5", "4", "3", "2"],
    correctAnswer: "5",
  },
  {
    text: "The relative error is defined as:",
    options: ["Absolute error / True value", "True value / Absolute error", "Absolute error * True value", "Absolute error + True value"],
    correctAnswer: "Absolute error / True value",
  },
  {
    text: "The bisection method is guaranteed to converge if:",
    options: ["f(a) * f(b) < 0", "f(a) * f(b) > 0", "f(a) * f(b) = 0", "None of the above"],
    correctAnswer: "f(a) * f(b) < 0",
  },
  {
    text: "The order of convergence of the bisection method is:",
    options: ["Linear", "Quadratic", "Cubic", "Logarithmic"],
    correctAnswer: "Linear",
  },
  {
    text: "The secant method is similar to the Newton-Raphson method, but it approximates the derivative using:",
    options: ["A finite difference", "The function value", "A constant", "None of the above"],
    correctAnswer: "A finite difference",
  },
  {
    text: "Stirling's interpolation formula is derived from:",
    options: ["Gauss's forward and backward formulas", "Newton's forward and backward formulas", "Lagrange's formula", "None of the above"],
    correctAnswer: "Gauss's forward and backward formulas",
  },
  {
    text: "Bessel's interpolation formula is used for:",
    options: ["Values near the middle of the table", "Values near the beginning of the table", "Values near the end of the table", "None of the above"],
    correctAnswer: "Values near the middle of the table",
  },
  {
    text: "The relationship between the operators E and Δ is:",
    options: ["E = 1 + Δ", "E = 1 - Δ", "E = Δ - 1", "E = Δ"],
    correctAnswer: "E = 1 + Δ",
  },
  {
    text: "The operator ∇ is called:",
    options: ["Backward difference operator", "Forward difference operator", "Central difference operator", "Shift operator"],
    correctAnswer: "Backward difference operator",
  },
  {
    text: "Simpson's 3/8 rule is applicable only when the number of sub-intervals is a multiple of:",
    options: ["3", "2", "4", "6"],
    correctAnswer: "3",
  },
  {
    text: "Boole's rule for numerical integration uses a polynomial of degree:",
    options: ["4", "3", "2", "5"],
    correctAnswer: "4",
  },
  {
    text: "Taylor series method for solving ordinary differential equations is a:",
    options: ["Single-step method", "Multi-step method", "Predictor-corrector method", "None of the above"],
    correctAnswer: "Single-step method",
  },
  {
    text: "Picard's method is an iterative method for solving:",
    options: ["Ordinary differential equations", "Partial differential equations", "Systems of linear equations", "Algebraic equations"],
    correctAnswer: "Ordinary differential equations",
  },
  {
    text: "Adam-Bashforth method is a:",
    options: ["Multi-step method", "Single-step method", "Predictor-corrector method", "None of the above"],
    correctAnswer: "Multi-step method",
  },
  {
    text: "LU decomposition method is used to solve:",
    options: ["Systems of linear equations", "Systems of non-linear equations", "Ordinary differential equations", "Partial differential equations"],
    correctAnswer: "Systems of linear equations",
  },
  {
    text: "The Jacobi's method for solving systems of linear equations is:",
    options: ["An iterative method", "A direct method", "Both a direct and an iterative method", "None of the above"],
    correctAnswer: "An iterative method",
  },
  {
    text: "The power method is used to find the:",
    options: ["Dominant eigenvalue", "Smallest eigenvalue", "All eigenvalues", "None of the above"],
    correctAnswer: "Dominant eigenvalue",
  },
  {
    text: "The process of finding the value of y for a given value of x, where x is outside the given range of x values, is called:",
    options: ["Extrapolation", "Interpolation", "Extrapolation and Interpolation", "None of the above"],
    correctAnswer: "Extrapolation",
  },
  {
    text: "The truncation error in Euler's method is of the order:",
    options: ["h^2", "h", "h^3", "h^4"],
    correctAnswer: "h^2",
  },
  {
    text: "The modified Euler's method is a:",
    options: ["Predictor-corrector method", "Single-step method", "Multi-step method", "None of the above"],
    correctAnswer: "Predictor-corrector method",
  },
  {
    text: "The number of equations required to solve a system of n unknowns is:",
    options: ["n", "n-1", "n+1", "2n"],
    correctAnswer: "n",
  },
  {
    text: "The process of constructing a polynomial that passes through a given set of data points is called:",
    options: ["Interpolation", "Extrapolation", "Regression", "Approximation"],
    correctAnswer: "Interpolation",
  },
  {
    text: "The forward difference operator Δ is defined as:",
    options: ["Δf(x) = f(x+h) - f(x)", "Δf(x) = f(x) - f(x-h)", "Δf(x) = f(x+h) + f(x)", "Δf(x) = f(x) + f(x-h)"],
    correctAnswer: "Δf(x) = f(x+h) - f(x)",
  },
  {
    text: "The backward difference operator ∇ is defined as:",
    options: ["∇f(x) = f(x) - f(x-h)", "∇f(x) = f(x+h) - f(x)", "∇f(x) = f(x) + f(x-h)", "∇f(x) = f(x+h) + f(x)"],
    correctAnswer: "∇f(x) = f(x) - f(x-h)",
  }
];