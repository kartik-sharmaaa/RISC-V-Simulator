# RISCV-32I-Simulator

Functional Simulator for a subset of RISC-V Instruction Set. RISC-V is an open-source Instruction Set Architecture (ISA) that has gained popularity in recent years due to its simplicity and extensibility. The simulator reads encoded instructions from a memory file (machine code), decodes, executes, and writes back the results to a register file.

## Overview

The project implements a functional simulator for a subset of RISC-V Instruction Set using a single-cycle processor design.<br>The simulator has two components:

- Command Line Interface (CLI)<br>The CLI component is explained [here](single_cycle/README.md) detail


## File Structure

```
.
├── README.md
├── docs
│   └── reference.docx
├── single_cycle
│   ├── README.md
│   ├── decode.py
│   ├── execute.py
│   ├── input.mc
│   ├── instruction_fetch.py
│   ├── main.py
│   ├── memory_access.py
│   ├── output.txt
│   ├── registers.py
│   └── write_back.py
├── single_cycle_webapp
│   │── README.md
│   │── app.py
│   │── ...
│   └── write_back.py
└── test
    ├── array_sum.mc
    ├── array_sum.s
    ├── bubble_sort.mc
    ├── bubble_sort.s
    ├── fibonacci.mc
    └── fibonacci.s
```

The `single_cycle` folder contains the source code for the CLI component of the simulator. The `single_cycle_webapp` folder contains the source code for the GUI component of the simulator. The `test` folder contains some sample programs to test the simulator's correctness.

## Supported Instructions

The simulator supports the following instructions:

```
R-Type: ADD, SUB, XOR, OR, AND, SLL, SRL, SRA
I-Type: ADDI, XORI, ORI, ANDI, SLLI, SRLI, SRAI, LB, LH, LW, JALR
S-Type: SB, SH, SW
B-Type: BEQ, BNE, BGE, BLT
U-Type: AUIPC, LUI
J-Type: JAL
```

Each instruction performs a specific operation such as arithmetic, logical, or control flow. For example, the ADDI instruction adds an immediate value to a register.