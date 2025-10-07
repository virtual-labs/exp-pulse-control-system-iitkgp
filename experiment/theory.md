# Theory

<div align="center">
<img class="img-fluid"  src="./images/DC Motor.png" alt=""><br>        
<figcaption style="color:black"> Fig.1. DC Motor Model </figcaption>						  
</div><br/>			        
<b><i>The DC motor dynamics:</i></b> <br>
The DC motor dynamics are represented by the following equations: <br/>
<b><i>Mechanical equation:</i></b> <br>

$$ J\dot{\omega}(t)+K_f \ {\omega}(t) = K_m \ i(t)  \tag{1}$$

where,
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">J</span> is the motor inertia, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>f</sub></span> is the damping coefficient, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>m</sub></span> is the motor constant, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">ω(t)</span> is the angular speed of the motor, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">i(t)</span> is the armature current, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">E <sub>b</sub> (t)</span> is the back electromotive force, given by <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">E <sub>b</sub> (t)</span> = <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K <sub>b</sub> ω(t)</span>, and <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>b</sub></span> is the back EMF constant.
<br/><br/>

<b><i>Electrical equation:</i></b> <br>

$$ L \dot{i}(t)+R {i}(t) + E_b (t)= V(t)  \tag{2}$$

where,
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">L</span> is the inductance, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">R</span> is the resistance, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">i(t)</span> is the armature current, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">V(t)</span> is the armature voltage (input). 
<br/><br/>

<b><i>Transfer Function:</i></b> <br>

$$ G(s) = \frac{\omega(s)}{V(s)} = \frac{K_m}{JL s^2 + (JR + LK_f) s + (RK_f + K_mK_b)}   \tag{3}$$

<b><i>Pulse Transfer Function:</i></b> <br> <br/>
The bilinear transform is used to transform continuous-time system representation to discrete-time.

$$ s = \frac{1}{T} ln(z) $$

$$ \approx \frac{2}{T} \frac{z -1}{z+1} $$

$$ \approx \frac{2}{T} \frac{1- z^{-1}}{1+z^{-1}}\tag{4} $$

where <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">T<sub>s</sub></span> is the sampling period.

$$ G(z) = \frac{\omega(z)}{V(z)} = \frac{(z^2+2z+1)K_m}{z^2[\frac{4JL}{{T_{s}}^2}+\frac{2(LK_f+RJ)}{T_{s}}+(RK_f+K_mK_b)]+z[2(RK_f+K_mK_b)-\frac{8JL}{{T_{s}}^2}]+[\frac{4JL}{{T_{s}}^2}-\frac{2(LK_f+RJ)}{T_{s}}+(RK_f+K_mK_b)]}   \tag{5}$$

<br/>

$$ G(z) = \frac{\omega(z)}{V(z)} = \frac{(K_m+2K_mz^{-1}+K_m z^{-2})}{[\frac{4JL}{{T_{s}}^2}+\frac{2(LK_f+RJ)}{T_{s}}+(RK_f+K_mK_b)]+z^{-1}[2(RK_f+K_mK_b)-\frac{8JL}{{T_{s}}^2}]+z^{-2}[\frac{4JL}{{T_{s}}^2}-\frac{2(LK_f+RJ)}{T_{s}}+(RK_f+K_mK_b)]}   \tag{6}$$

<br/>

<b><i>State Space Model of the DC motor:</i></b> <br>
<br/> Continuous State Space form: <br/>

$$	\begin{bmatrix} 	\dot{\omega}(t)  \\	\dot{i_a}(t) \end{bmatrix}	= \begin{bmatrix} 	-\frac{K_f}{J}  & \frac{K_m}{J}\\	-\frac{K_b}{L} & -\frac{R}{L} \end{bmatrix} \begin{bmatrix} 	\omega(t)  \\	i_a(t) \end{bmatrix} + \begin{bmatrix} 0 & \frac{1}{J} \\	\frac{1}{L} & 0\end{bmatrix} \begin{bmatrix} V_a(t) \\	T_d (t) \end{bmatrix}	\quad	 $$ 
$$	y(t)	= \begin{bmatrix} 	1  & 0 \end{bmatrix} \begin{bmatrix} 	\omega(t)  \\	i_a(t) \end{bmatrix} 	\quad	 $$ 
$$    \tag{7} $$

where,
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">T<sub>d</sub></span> is the load disturbance. 
<br/><br/>
<br/> Discrete State Space form: <br/>

$$	\begin{bmatrix} 	\omega [k+1]  \\	i_a [k+1] \end{bmatrix}	= \begin{bmatrix} 	1-\frac{K_f T_s}{J}  & \frac{K_m T_s}{J} \\	-\frac{K_b T_s}{L} & 1-\frac{R T_s}{L} \end{bmatrix} \begin{bmatrix} 	\omega [k] \\	i_a [k] \end{bmatrix} + \begin{bmatrix} \frac{K_m {T_s}^2}{2JL} & (\frac{T_s}{J}-\frac{K_f{T_s}^2}{2J^2}) \\	(\frac{T_s}{L}-\frac{R{T_s}^2}{2L^2}) & -\frac{K_b {T_s}^2}{2JL} \end{bmatrix} \begin{bmatrix} V_a(k) \\	T_d (k) \end{bmatrix}	\quad	 $$ 
$$	y[k]	= \begin{bmatrix} 	1  & 0 \end{bmatrix} \begin{bmatrix} 	\omega[k]  \\	i_a[k] \end{bmatrix} 	\quad	 $$ 
$$    \tag{8} $$




<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>