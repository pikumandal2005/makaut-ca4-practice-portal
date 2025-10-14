export const questions = [
  // Unit 1: Introduction
  {
    text: "A network is called linear if it satisfies the principle of:",
    options: ["Superposition", "Homogeneity", "Both Superposition and Homogeneity", "None of the above"],
    correctAnswer: "Both Superposition and Homogeneity",
  },
  {
    text: "A circuit with constant parameters that do not change with time is called a:",
    options: ["Time-varying network", "Fixed network", "Lumped network", "Distributed network"],
    correctAnswer: "Fixed network",
  },
  {
    text: "Which of the following is an active element?",
    options: ["Resistor", "Inductor", "Capacitor", "Voltage source"],
    correctAnswer: "Voltage source",
  },
  {
    text: "A dependent source is a source whose value depends on:",
    options: ["A voltage or current elsewhere in the circuit", "A fixed value", "The load connected to it", "The temperature"],
    correctAnswer: "A voltage or current elsewhere in the circuit",
  },
  {
    text: "The ramp signal is a signal that:",
    options: ["Increases linearly with time", "Is constant for t > 0", "Is zero for t > 0", "Is a sinusoidal function of time"],
    correctAnswer: "Increases linearly with time",
  },
  {
    text: "An ideal voltage source has:",
    options: ["Zero internal resistance", "Infinite internal resistance", "A small value of internal resistance", "A large value of internal resistance"],
    correctAnswer: "Zero internal resistance",
  },
  {
    text: "An ideal current source has:",
    options: ["Zero internal resistance", "Infinite internal resistance", "A small value of internal resistance", "A large value of internal resistance"],
    correctAnswer: "Infinite internal resistance",
  },
  {
    text: "A network in which the circuit elements like R, L, C cannot be physically separated is called a:",
    options: ["Lumped network", "Distributed network", "Active network", "Passive network"],
    correctAnswer: "Distributed network",
  },
  {
    text: "Which of the following is a passive element?",
    options: ["Transistor", "Operational Amplifier", "Inductor", "Diode"],
    correctAnswer: "Inductor",
  },
  {
    text: "The impulse signal is a signal that has:",
    options: ["Infinite magnitude at t=0 and is zero elsewhere", "A constant value for t>0", "A value that increases linearly with time", "A sinusoidal form"],
    correctAnswer: "Infinite magnitude at t=0 and is zero elsewhere",
  },

  // Unit 2: Graph theory and Networks equations
  {
    text: "A tree in a network graph is a connected subgraph that contains:",
    options: ["All the nodes of the graph and no loops", "All the branches of the graph", "A single loop", "All the nodes and all the branches"],
    correctAnswer: "All the nodes of the graph and no loops",
  },
  {
    text: "The number of branches in a tree is given by (n = number of nodes):",
    options: ["n - 1", "n", "n + 1", "n / 2"],
    correctAnswer: "n - 1",
  },
  {
    text: "The branches of a graph that are not in the tree are called:",
    options: ["Twigs", "Links or chords", "Stems", "Spurs"],
    correctAnswer: "Links or chords",
  },
  {
    text: "The incidence matrix of a graph relates:",
    options: ["Branches and nodes", "Branches and loops", "Nodes and loops", "Nodes and the entire graph"],
    correctAnswer: "Branches and nodes",
  },
  {
    text: "The tie-set matrix is used for:",
    options: ["Nodal analysis", "Mesh analysis", "Both nodal and mesh analysis", "Finding the number of branches"],
    correctAnswer: "Mesh analysis",
  },
  {
    text: "The cut-set matrix is used for:",
    options: ["Nodal analysis", "Mesh analysis", "Both nodal and mesh analysis", "Finding the number of loops"],
    correctAnswer: "Nodal analysis",
  },
  {
    text: "Duality in a network means that the nodal equations of one network have the same form as the mesh equations of the other. The dual of a resistor is a:",
    options: ["Resistor", "Inductor", "Capacitor", "Conductance"],
    correctAnswer: "Conductance",
  },
  {
    text: "The dual of an inductor is a:",
    options: ["Capacitor", "Resistor", "Inductor", "Voltage source"],
    correctAnswer: "Capacitor",
  },
  {
    text: "The number of independent KVL equations for a network with n nodes and b branches is:",
    options: ["b - n + 1", "b - n", "n - 1", "b"],
    correctAnswer: "b - n + 1",
  },
  {
    text: "The number of independent KCL equations for a network with n nodes is:",
    options: ["n - 1", "n", "b - n + 1", "b"],
    correctAnswer: "n - 1",
  },

  // Unit 3: Coupled circuits
  {
    text: "Magnetic coupling between two coils is the property by which the magnetic flux produced by one coil links with the other. The coefficient of coupling k is given by:",
    options: ["k = M / sqrt(L1*L2)", "k = sqrt(L1*L2) / M", "k = M * sqrt(L1*L2)", "k = M / (L1*L2)"],
    correctAnswer: "k = M / sqrt(L1*L2)",
  },
  {
    text: "The value of the coefficient of coupling k lies between:",
    options: ["0 and 1", "-1 and 1", "0 and infinity", "1 and infinity"],
    correctAnswer: "0 and 1",
  },
  {
    text: "If the coefficient of coupling is zero, the two coils are said to be:",
    options: ["Magnetically isolated", "Tightly coupled", "Perfectly coupled", "Loosely coupled"],
    correctAnswer: "Magnetically isolated",
  },
  {
    text: "The dot convention is used to determine the:",
    options: ["Polarity of the mutually induced voltage", "Magnitude of the self-inductance", "Magnitude of the mutual inductance", "Direction of the current"],
    correctAnswer: "Polarity of the mutually induced voltage",
  },
  {
    text: "In a series-aiding connection of two coupled coils, the equivalent inductance is:",
    options: ["L1 + L2 + 2M", "L1 + L2 - 2M", "L1 + L2", "sqrt(L1*L2)"],
    correctAnswer: "L1 + L2 + 2M",
  },
  {
    text: "In a series-opposing connection of two coupled coils, the equivalent inductance is:",
    options: ["L1 + L2 - 2M", "L1 + L2 + 2M", "L1 + L2", "sqrt(L1*L2)"],
    correctAnswer: "L1 + L2 - 2M",
  },
  {
    text: "The mutual inductance between two coils depends on:",
    options: ["The geometry of the coils and their relative position", "The current in the coils", "The voltage across the coils", "The material of the coils"],
    correctAnswer: "The geometry of the coils and their relative position",
  },
  {
    text: "The unit of mutual inductance is:",
    options: ["Henry", "Farad", "Ohm", "Weber"],
    correctAnswer: "Henry",
  },
  {
    text: "For perfectly coupled coils, the coefficient of coupling k is:",
    options: ["1", "0", "0.5", "-1"],
    correctAnswer: "1",
  },
  {
    text: "The polarity of the induced voltage in a coil is determined by:",
    options: ["Lenz's Law", "Ohm's Law", "Kirchhoff's Law", "Faraday's Law"],
    correctAnswer: "Lenz's Law",
  },

  // Unit 4: Laplace transforms
  {
    text: "The Laplace transform of a unit step function u(t) is:",
    options: ["1/s", "1", "s", "1/s^2"],
    correctAnswer: "1/s",
  },
  {
    text: "The Laplace transform of an impulse function δ(t) is:",
    options: ["1", "1/s", "s", "0"],
    correctAnswer: "1",
  },
  {
    text: "The transient response of a circuit is its response to a change in the input that disappears over time. In an RL circuit, the time constant is:",
    options: ["L/R", "R/L", "1/(L*R)", "L*R"],
    correctAnswer: "L/R",
  },
  {
    text: "In an RC circuit, the time constant is:",
    options: ["R*C", "1/(R*C)", "R/C", "C/R"],
    correctAnswer: "R*C",
  },
  {
    text: "The convolution theorem states that the Laplace transform of the convolution of two functions is the product of their individual Laplace transforms. The convolution of f(t) and g(t) is defined as:",
    options: ["integral from 0 to t of f(τ)g(t-τ)dτ", "f(t) * g(t)", "d/dt (f(t) * g(t))", "integral of f(t)g(t) dt"],
    correctAnswer: "integral from 0 to t of f(τ)g(t-τ)dτ",
  },
  {
    text: "The initial value theorem in Laplace transforms is used to find the initial value of a function f(t) at t=0. It is given by:",
    options: ["lim (s -> infinity) sF(s)", "lim (s -> 0) sF(s)", "lim (s -> infinity) F(s)/s", "lim (s -> 0) F(s)/s"],
    correctAnswer: "lim (s -> infinity) sF(s)",
  },
  {
    text: "The final value theorem in Laplace transforms is used to find the final value of a function f(t) as t -> infinity. It is given by:",
    options: ["lim (s -> 0) sF(s)", "lim (s -> infinity) sF(s)", "lim (s -> 0) F(s)/s", "lim (s -> infinity) F(s)/s"],
    correctAnswer: "lim (s -> 0) sF(s)",
  },
  {
    text: "The Laplace transform is a powerful tool for solving:",
    options: ["Linear differential equations", "Non-linear differential equations", "Algebraic equations", "Trigonometric equations"],
    correctAnswer: "Linear differential equations",
  },
  {
    text: "The inverse Laplace transform of 1/(s-a) is:",
    options: ["e^(at)", "e^(-at)", "sin(at)", "cos(at)"],
    correctAnswer: "e^(at)",
  },
  {
    text: "The Laplace transform of sin(ωt) is:",
    options: ["ω / (s^2 + ω^2)", "s / (s^2 + ω^2)", "ω / (s^2 - ω^2)", "s / (s^2 - ω^2)"],
    correctAnswer: "ω / (s^2 + ω^2)",
  },

  // Unit 5: Fourier method of waveform analysis
  {
    text: "A periodic function can be represented by a sum of sinusoids using:",
    options: ["Fourier series", "Laplace transform", "Taylor series", "Z-transform"],
    correctAnswer: "Fourier series",
  },
  {
    text: "The Fourier series of an even function contains only:",
    options: ["Cosine terms", "Sine terms", "Both sine and cosine terms", "DC term only"],
    correctAnswer: "Cosine terms",
  },
  {
    text: "The Fourier series of an odd function contains only:",
    options: ["Sine terms", "Cosine terms", "Both sine and cosine terms", "DC term only"],
    correctAnswer: "Sine terms",
  },
  {
    text: "The Fourier transform is used for the analysis of:",
    options: ["Non-periodic signals", "Periodic signals", "Both periodic and non-periodic signals", "Discrete signals only"],
    correctAnswer: "Non-periodic signals",
  },
  {
    text: "The Fourier transform of a rectangular pulse is a:",
    options: ["Sinc function", "Sine function", "Cosine function", "Triangular function"],
    correctAnswer: "Sinc function",
  },
  {
    text: "The property of the Fourier transform which states that the transform of f(t-t0) is e^(-jωt0)F(ω) is called:",
    options: ["Time shifting property", "Frequency shifting property", "Time scaling property", "Duality property"],
    correctAnswer: "Time shifting property",
  },
  {
    text: "The Fourier transform of a constant DC signal is:",
    options: ["An impulse function at ω=0", "A constant value", "A sinc function", "Zero"],
    correctAnswer: "An impulse function at ω=0",
  },
  {
    text: "The application of Fourier series in circuit analysis is to find the response of a circuit to a:",
    options: ["Periodic non-sinusoidal input", "Sinusoidal input", "DC input", "Transient input"],
    correctAnswer: "Periodic non-sinusoidal input",
  },
  {
    text: "The spectrum of a periodic signal is:",
    options: ["A discrete spectrum", "A continuous spectrum", "A single line spectrum", "None of the above"],
    correctAnswer: "A discrete spectrum",
  },
  {
    text: "The spectrum of a non-periodic signal is:",
    options: ["A continuous spectrum", "A discrete spectrum", "A single line spectrum", "None of the above"],
    correctAnswer: "A continuous spectrum",
  },

  // Unit 6: Network Theorems
  {
    text: "The superposition theorem is applicable to:",
    options: ["Linear circuits only", "Non-linear circuits only", "Both linear and non-linear circuits", "Circuits with dependent sources only"],
    correctAnswer: "Linear circuits only",
  },
  {
    text: "Thevenin's theorem simplifies a complex two-terminal linear circuit into:",
    options: ["A single voltage source in series with a single resistor.", "A single current source in parallel with a single resistor.", "A single voltage source only.", "A single resistor only."],
    correctAnswer: "A single voltage source in series with a single resistor.",
  },
  {
    text: "Norton's theorem is the dual of:",
    options: ["Thevenin's theorem", "Superposition theorem", "Maximum power transfer theorem", "Kirchhoff's laws"],
    correctAnswer: "Thevenin's theorem",
  },
  {
    text: "The maximum power is transferred from a source to a load when:",
    options: ["The load resistance is equal to the source resistance.", "The load resistance is zero.", "The load resistance is infinite.", "The load resistance is half the source resistance."],
    correctAnswer: "The load resistance is equal to the source resistance.",
  },
  {
    text: "Millman's theorem is used to find the common voltage across a number of:",
    options: ["Parallel branches", "Series branches", "Both series and parallel branches", "Meshes"],
    correctAnswer: "Parallel branches",
  },
  {
    text: "Source transformation is the process of converting a:",
    options: ["Voltage source in series with a resistor to a current source in parallel with a resistor, and vice-versa", "Voltage source to a current source", "Current source to a voltage source", "Dependent source to an independent source"],
    correctAnswer: "Voltage source in series with a resistor to a current source in parallel with a resistor, and vice-versa",
  },
  {
    text: "Loop variable analysis is another name for:",
    options: ["Mesh analysis", "Nodal analysis", "Thevenin's theorem", "Norton's theorem"],
    correctAnswer: "Mesh analysis",
  },
  {
    text: "Node variable analysis is another name for:",
    options: ["Nodal analysis", "Mesh analysis", "Thevenin's theorem", "Norton's theorem"],
    correctAnswer: "Nodal analysis",
  },
  {
    text: "Thevenin's resistance (Rth) is found by:",
    options: ["Replacing all independent sources with their internal resistances", "Short-circuiting all voltage sources and open-circuiting all current sources", "Open-circuiting all voltage sources and short-circuiting all current sources", "Replacing all sources with a short circuit"],
    correctAnswer: "Short-circuiting all voltage sources and open-circuiting all current sources",
  },
  {
    text: "Norton's current (IN) is the current flowing through the:",
    options: ["Shorted output terminals", "Open output terminals", "Load resistor", "Thevenin's resistance"],
    correctAnswer: "Shorted output terminals",
  },
  {
    text: "Millman's theorem is particularly useful for circuits with many:",
    options: ["Parallel voltage sources", "Series current sources", "Parallel current sources", "Series voltage sources"],
    correctAnswer: "Parallel voltage sources",
  },
  {
    text: "The maximum power transfer theorem for AC circuits states that maximum power is transferred when the load impedance is the:",
    options: ["Complex conjugate of the source impedance", "Same as the source impedance", "Reciprocal of the source impedance", "Negative of the source impedance"],
    correctAnswer: "Complex conjugate of the source impedance",
  },
  {
    text: "In a three-phase unbalanced circuit, Millman's theorem can be used to find the:",
    options: ["Neutral shift voltage", "Phase sequence", "Total power", "Power factor"],
    correctAnswer: "Neutral shift voltage",
  },
  {
    text: "When using the superposition theorem, how many sources are considered at a time?",
    options: ["One", "Two", "All", "None"],
    correctAnswer: "One",
  },
  {
    text: "Thevenin's theorem can be applied to which type of networks?",
    options: ["Linear and bilateral", "Linear and unilateral", "Non-linear and bilateral", "Non-linear and unilateral"],
    correctAnswer: "Linear and bilateral",
  }
];