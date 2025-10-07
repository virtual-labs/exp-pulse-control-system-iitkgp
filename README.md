## Introduction

<div align="center">
<img src="experiment/images/iitkgp.png" width="10%">
</div>

<b>Discipline | <b>Electrical Engineering 
:--|:--|
<b> Lab | <b> Digital Control Laboratory
<b> Experiment|     <b> Determine the Pulse Transfer Function and State Space Model of the DC Motor and Exp 5

### About the Experiment 

DC motors are widely used in position control applications, such as robotics, automation systems, and actuators, due to their simplicity, efficiency, and ability to provide precise control over speed and position.
To design effective position control systems for DC motor, it is essential to model their dynamic behavior accurately. </br></br>

<b><i>Pulse Transfer Function:</i></b> <br>
The transfer function is a mathematical representation of a system's input-output relationship in the continuous time domain. It is typically derived by taking the Laplace transform of the system's differential equations, assuming zero intial conditions.</br>
The general form of the transfer function is:

$$ G(s)= \frac{Y(s)}{U(s)} \tag{1} $$

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">Y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">s</span>) is the Laplace transform of the output, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">U</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">s</span>) is the Laplace transform of the input.
</br>
The pulse transfer function describes the system's behavior in the discrete time domain. It is useful when working with sampled data systems. The pulse transfer function relates the input and output of a systems in the z-domain, which is the discrete time equivalent of the Laplace domain. </br>
The general form of the pulse transfer function is:

$$ G(z)= \frac{Y(z)}{U(z)} \tag{2} $$

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">Y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">z</span>) is the z transform of the output, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">U</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">z</span>) is the z transform of the input. </br>
</br>

<b><i> State Space Model:</i></b> <br>
Linear time invariant system may be represented in state space form by the following equations:
</br>
State equation:

$$ \dot{x}(t)=A x(t)+B u(t) \tag{3a} $$

Output equation:

$$ y(t)= C x(t) \tag{3b} $$
</br>
where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is state vector, <span style="font-family:Sitka Text;font-style:italic">y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is output vector, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> is input or control vector, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">A</span> is system matrix, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">B</span> is input matrix, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">C</span> is output matrix.</br></br>

Discrete state space form represented by the following equations: </br>
State equation:

$$ {x}[k+1]=F x[k]+g u[k] \tag{4a} $$

Output equation:

$$ y[k] = C x[k] \tag{4b} $$

<div align="center">
<img class="img-fluid"  src="experiment/images/F_g.png" alt=""><br>
</div>

<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is state vector, <span style="font-family:Sitka Text;font-style:italic">y</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is output vector, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> is input or control vector, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> is system matrix, 
<span style="font-style:italic;font-size:18px">g</span> is input matrix, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">C</span> is output matrix. </br></br>


<b>Subject matter expertise | <b> **Prof. Alok Kanti Deb**
:--|:--|
<b> Institute | <b>  **Indian Institute of Technology Kharagpur**
<b> Email id|     <b>  **alokkanti@ee.iitkgp.ac.in**
<b> Department |  **Department of Electrical Engineering**
<b>Webpage| <b> http://www.iitkgp.ac.in/department/EE/faculty/ee-alokkanti

### Contributors List

SrNo | Name | VLabs Developer or Integration Engineer | Designation | Department| Institute
:--|:--|:--|:--|:--|:--|
1 | **Kamal Sandeep Karreddula** | Developer | Research Scholar | Department of Electrical Engineering | IIT Kharagpur | 
2 | **Piyali Chattopadhyay** | Integration Engineer | Project Scientist | Department of Mechanical Engineering | IIT Kharagpur |


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
