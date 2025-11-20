


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
/* document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];
 */
 location.reload();
//document.getElementById('0.3fr').style.display = "none";



}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];

//////////////////////


function system01(){

            document.getElementById('tfbody01').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var Km = document.getElementById('Km1').value;			
			var L = document.getElementById('L1').value;
			var R = document.getElementById('R1').value;
			var J = document.getElementById('J1').value;			
			var Kf = document.getElementById('Kf1').value;
			var Kb = document.getElementById('Kb1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			/*
			var a11=math.divide(math.round(math.multiply(math.divide(-Kf,J),1000)),1000);
			var a12=math.divide(math.round(math.multiply(math.divide(Km,J),1000)),1000);
			var a21=math.divide(math.round(math.multiply(math.divide(-Kb,L),1000)),1000);
		    var a22=math.divide(math.round(math.multiply(math.divide(-R,L),1000)),1000);
			
		
			
			//var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b11=b22=0;
			var b12=math.divide(math.round(math.multiply(math.divide(1,J),1000)),1000);
			var b21=math.divide(math.round(math.multiply(math.divide(1,L),1000)),1000);
			
			var c11=1; 
			var c12=0;
			var d11=0;
			
			//document.getElementById('a_22').value = a22;
			//document.getElementById('b_2').value = b2;
			
			//var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			//var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			//var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b11, b12], [b21, b22]]);
			//var mC = math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			//var mD = math.matrix([[d11], [d21]]);
		*/
		
			
			var b0=Km;
			var a0=math.divide(math.round(math.multiply(math.multiply(J,L),10000)),10000);
			var a1=math.divide(math.round(math.multiply(math.add(math.multiply(J,R),math.multiply(Kf,L)),10000)),10000);
			var a2=math.divide(math.round(math.multiply(math.add(math.multiply(Kf,R),math.multiply(Km,Kb)),10000)),10000);
			
			console.log(b0);
			console.log(a0);
			console.log(a1);
			console.log(a2);
			
			document.getElementById('bo').innerHTML = ' b<sub>0</sub> = '+ b0+ ' '
			document.getElementById('ao').innerHTML = ' a<sub>0</sub> = '+ a0+ ' '
			document.getElementById('ao1').innerHTML = ' a<sub>1</sub> = '+ a1+ ' '
			document.getElementById('ao2').innerHTML = ' a<sub>2</sub> = '+ a2+ ' '
			
			
			
			//outputText1=" G(s)= ["+b0+"s\u00B2+("+b1+")s+("+b2+ ")] / [" +a0+"s<sup>2</sup>+("+a1+")s+("+a2+ ")]";
			
			//matA = "A = ["+a11+","+a12+"
			
			
			
			/*
			var EVs=math.eigs(mA);
			console.log(EVs);
			var EV=EVs.values;
			console.log(EV);
			var EV1=math.divide(math.round(math.multiply(EVs.values._data[0],1000)),1000);
			var EV2=math.divide(math.round(math.multiply(EVs.values._data[1],1000)),1000);
			//var EV3=math.divide(math.round(math.multiply(EVs.values._data[2],1000)),1000);
			//var EV4=math.divide(math.round(math.multiply(EVs.values._data[3],1000)),1000);
			
			console.log(EV);
			console.log(EV1);
			console.log(EV2);
			//console.log(EV3);
			//console.log(EV4);
			
			
			
			E1="Eigen Value-1 = " +EV1+ "";
			E2="Eigen Value-2 = " +EV2+ "";
			//E3="Eigen Value-3 = " +EV3+ "";
			//E4="Eigen Value-4 = " +EV4+ "";
			
			/*document.getElementById("Eigen_Value1").innerHTML=E1;
			document.getElementById("Eigen_Value2").innerHTML=E2;
			document.getElementById("Eigen_Value3").innerHTML=E3;
			document.getElementById("Eigen_Value4").innerHTML=E4;*/
			/*
			document.getElementById('EigenValues').innerHTML = ' Eigen Values =['+ EV1+',\t'+EV2+']';
			
			
			//document.getElementById('matCd').innerHTML = ' C =['+ c11+',\t'+c12+']';
			//document.getElementById('matDd').innerHTML = ' D =['+ d11+']';
			*/
			
			document.getElementById("run02").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
			
			
			
			/*
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
            var mC = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);

            // Matrix Multiplication
            var AA = math.multiply(mA, mA);
			var AAA = math.multiply(mA, mA, mA);
			var AB = math.multiply(mA, mB);
			var AAB = math.multiply(AA, mB);
			var AAAB = math.multiply(AAA, mB);
			
			var Qc = math.matrix([mB, AB, AAB, AAAB]);
			
			

            // Result [800, 630, 380]
	        console.log(AA);
			console.log(AAA);
			console.log(AB);
			console.log(AAB);
			console.log(AAAB);
			console.log(Qc);
			console.log(mB[0]);
			*/
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			//outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}
			
function system02(){

            document.getElementById('tfbody02').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var Km = document.getElementById('Km1').value;			
			var L = document.getElementById('L1').value;
			var R = document.getElementById('R1').value;
			var J = document.getElementById('J1').value;			
			var Kf = document.getElementById('Kf1').value;
			var Kb = document.getElementById('Kb1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
			var bd0=bd2=Km;
			var bd1=math.multiply(2,Km);
			
			var ad0_1 = math.divide(math.round(math.multiply(math.divide(math.multiply(4,J,L),math.multiply(Ts,Ts)),10000)),10000);
			var ad0_2 = math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(2,L,Kf),math.multiply(2,R,J)),Ts),10000)),10000);
			var ad0_3 = math.divide(math.round(math.multiply((math.add(math.multiply(R,Kf),math.multiply(Km,Kb))),10000)),10000);
			
			var ad0 = math.divide(math.round(math.multiply(math.add(ad0_1,ad0_2,ad0_3),10000)),10000);
			
			var ad1_1 = math.divide(math.round(math.multiply(math.add(math.multiply(2,R,Kf),math.multiply(2,Km,Kb)),10000)),10000);
			var ad1_2 = math.divide(math.round(math.multiply(math.divide(math.multiply(8,L,J),math.multiply(Ts,Ts)),10000)),10000);
			
			var ad1 = math.divide(math.round(math.multiply(math.add(ad1_1,-ad1_2),10000)),10000);
			var ad2 = math.divide(math.round(math.multiply(math.add(ad0_1,-ad0_2,ad0_3),10000)),10000);
			
			console.log(bd0);
			console.log(bd1);
			console.log(bd2);
			console.log(ad0);
			console.log(ad1);
			console.log(ad2);
			
			document.getElementById('bdo').innerHTML = ' b<sub>d0</sub> = '+ bd0+ ' '
			document.getElementById('bdo1').innerHTML = ' b<sub>d1</sub> = '+ bd1+ ' '
			document.getElementById('bdo2').innerHTML = ' b<sub>d2</sub> = '+ bd2+ ' '
			document.getElementById('ado').innerHTML = ' a<sub>d0</sub> = '+ ad0+ ' '
			document.getElementById('ado1').innerHTML = ' a<sub>d1</sub> = '+ ad1+ ' '
			document.getElementById('ado2').innerHTML = ' a<sub>d2</sub> = '+ ad2+ ' '
			
			
			
			
			/*
			
			var a11=math.divide(math.round(math.multiply(math.divide(-Kf,J),1000)),1000);
			var a12=math.divide(math.round(math.multiply(math.divide(Km,J),1000)),1000);
			var a21=math.divide(math.round(math.multiply(math.divide(-Kb,L),1000)),1000);
		    var a22=math.divide(math.round(math.multiply(math.divide(-R,L),1000)),1000);
			
		
			
			//var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b11=b22=0;
			var b12=math.divide(math.round(math.multiply(math.divide(1,J),1000)),1000);
			var b21=math.divide(math.round(math.multiply(math.divide(1,L),1000)),1000);
			
			var c11=1; 
			var c12=0;
			var d11=0;
			
			//document.getElementById('a_22').value = a22;
			//document.getElementById('b_2').value = b2;
			
			//var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			//var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			//var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b11, b12], [b21, b22]]);
			//var mC = math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			//var mD = math.matrix([[d11], [d21]]);
		
			
			document.getElementById('matA').innerHTML = ' A =['+ a11+',\t'+a12+';\t\t'+a21+','+a22+']';
			document.getElementById('matB').innerHTML = ' B =['+ b11+',\t\t'+b12+';\t\t'+b21+','+b22+']';
			document.getElementById('matC').innerHTML = ' C =['+ c11+',\t'+c12+']';
			document.getElementById('matD').innerHTML = ' D =['+ d11+']';
			
			//outputText1=" G(s)= ["+b0+"s\u00B2+("+b1+")s+("+b2+ ")] / [" +a0+"s<sup>2</sup>+("+a1+")s+("+a2+ ")]";
			
			//matA = "A = ["+a11+","+a12+"
			
			
			
			
			var EVs=math.eigs(mA);
			console.log(EVs);
			var EV=EVs.values;
			console.log(EV);
			var EV1=math.divide(math.round(math.multiply(EVs.values._data[0],1000)),1000);
			var EV2=math.divide(math.round(math.multiply(EVs.values._data[1],1000)),1000);
			//var EV3=math.divide(math.round(math.multiply(EVs.values._data[2],1000)),1000);
			//var EV4=math.divide(math.round(math.multiply(EVs.values._data[3],1000)),1000);
			
			console.log(EV);
			console.log(EV1);
			console.log(EV2);
			//console.log(EV3);
			//console.log(EV4);
			
			
			
			E1="Eigen Value-1 = " +EV1+ "";
			E2="Eigen Value-2 = " +EV2+ "";
			//E3="Eigen Value-3 = " +EV3+ "";
			//E4="Eigen Value-4 = " +EV4+ "";
			
			/*document.getElementById("Eigen_Value1").innerHTML=E1;
			document.getElementById("Eigen_Value2").innerHTML=E2;
			document.getElementById("Eigen_Value3").innerHTML=E3;
			document.getElementById("Eigen_Value4").innerHTML=E4;*/
			/*
			document.getElementById('EigenValues').innerHTML = ' Eigen Values =['+ EV1+',\t'+EV2+']';
			
			
			
			
			
			
			//document.getElementById('matCd').innerHTML = ' C =['+ c11+',\t'+c12+']';
			//document.getElementById('matDd').innerHTML = ' D =['+ d11+']';
			
			*/
			document.getElementById("run").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
			
			
			
			/*
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
            var mC = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);

            // Matrix Multiplication
            var AA = math.multiply(mA, mA);
			var AAA = math.multiply(mA, mA, mA);
			var AB = math.multiply(mA, mB);
			var AAB = math.multiply(AA, mB);
			var AAAB = math.multiply(AAA, mB);
			
			var Qc = math.matrix([mB, AB, AAB, AAAB]);
			
			

            // Result [800, 630, 380]
	        console.log(AA);
			console.log(AAA);
			console.log(AB);
			console.log(AAB);
			console.log(AAAB);
			console.log(Qc);
			console.log(mB[0]);
			*/
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			//outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}
			
function system(){

            document.getElementById('tfbody').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var Km = document.getElementById('Km1').value;			
			var L = document.getElementById('L1').value;
			var R = document.getElementById('R1').value;
			var J = document.getElementById('J1').value;			
			var Kf = document.getElementById('Kf1').value;
			var Kb = document.getElementById('Kb1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
			var a11=math.divide(math.round(math.multiply(math.divide(-Kf,J),10000)),10000);
			var a12=math.divide(math.round(math.multiply(math.divide(Km,J),10000)),10000);
			var a21=math.divide(math.round(math.multiply(math.divide(-Kb,L),10000)),10000);
		    var a22=math.divide(math.round(math.multiply(math.divide(-R,L),10000)),10000);
			
		
			
			//var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b11=b22=0;
			var b12=math.divide(math.round(math.multiply(math.divide(1,J),10000)),10000);
			var b21=math.divide(math.round(math.multiply(math.divide(1,L),10000)),10000);
			
			var c11=1; 
			var c12=0;
			var d11=0;
			
			//document.getElementById('a_22').value = a22;
			//document.getElementById('b_2').value = b2;
			
			//var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			//var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			//var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b11, b12], [b21, b22]]);
			//var mC = math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			//var mD = math.matrix([[d11], [d21]]);
		
			
			document.getElementById('matA').innerHTML = ' A =['+ a11+',\t'+a12+';\t\t'+a21+','+a22+']';
			document.getElementById('matB').innerHTML = ' B =['+ b11+',\t\t'+b12+';\t\t'+b21+','+b22+']';
			document.getElementById('matC').innerHTML = ' C =['+ c11+',\t'+c12+']';
			document.getElementById('matD').innerHTML = ' D =['+ d11+']';
			
			//outputText1=" G(s)= ["+b0+"s\u00B2+("+b1+")s+("+b2+ ")] / [" +a0+"s<sup>2</sup>+("+a1+")s+("+a2+ ")]";
			
			//matA = "A = ["+a11+","+a12+"
			
			
			
			
			var EVs=math.eigs(mA);
			console.log(EVs);
			var EV=EVs.values;
			console.log(EV);
			var EV1=math.divide(math.round(math.multiply(EVs.values._data[0],10000)),10000);
			var EV2=math.divide(math.round(math.multiply(EVs.values._data[1],10000)),10000);
			//var EV3=math.divide(math.round(math.multiply(EVs.values._data[2],1000)),1000);
			//var EV4=math.divide(math.round(math.multiply(EVs.values._data[3],1000)),1000);
			
			console.log(EV);
			console.log(EV1);
			console.log(EV2);
			//console.log(EV3);
			//console.log(EV4);
			
			
			
			E1="Eigen Value-1 = " +EV1+ "";
			E2="Eigen Value-2 = " +EV2+ "";
			//E3="Eigen Value-3 = " +EV3+ "";
			//E4="Eigen Value-4 = " +EV4+ "";
			
			/*document.getElementById("Eigen_Value1").innerHTML=E1;
			document.getElementById("Eigen_Value2").innerHTML=E2;
			document.getElementById("Eigen_Value3").innerHTML=E3;
			document.getElementById("Eigen_Value4").innerHTML=E4;*/
			
			//document.getElementById('EigenValues').innerHTML = ' Eigen Values =['+ EV1+',\t'+EV2+']';
			
			
			//document.getElementById('matCd').innerHTML = ' C =['+ c11+',\t'+c12+']';
			//document.getElementById('matDd').innerHTML = ' D =['+ d11+']';
			
			
			document.getElementById("run11").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
			
			
			
			/*
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
            var mC = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);

            // Matrix Multiplication
            var AA = math.multiply(mA, mA);
			var AAA = math.multiply(mA, mA, mA);
			var AB = math.multiply(mA, mB);
			var AAB = math.multiply(AA, mB);
			var AAAB = math.multiply(AAA, mB);
			
			var Qc = math.matrix([mB, AB, AAB, AAAB]);
			
			

            // Result [800, 630, 380]
	        console.log(AA);
			console.log(AAA);
			console.log(AB);
			console.log(AAB);
			console.log(AAAB);
			console.log(Qc);
			console.log(mB[0]);
			*/
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			//outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}
			
function DSSDC(){
	document.getElementById('tfbody1').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			var Km = document.getElementById('Km1').value;			
			var L = document.getElementById('L1').value;
			var R = document.getElementById('R1').value;
			var J = document.getElementById('J1').value;			
			var Kf = document.getElementById('Kf1').value;
			var Kb = document.getElementById('Kb1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
			var a11=math.divide(math.round(math.multiply(math.divide(-Kf,J),10000)),10000);
			var a12=math.divide(math.round(math.multiply(math.divide(Km,J),10000)),10000);
			var a21=math.divide(math.round(math.multiply(math.divide(-Kb,L),10000)),10000);
		    var a22=math.divide(math.round(math.multiply(math.divide(-R,L),10000)),10000);
			
		
			
			//var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b11=b22=0;
			var b12=math.divide(math.round(math.multiply(math.divide(1,J),10000)),10000);
			var b21=math.divide(math.round(math.multiply(math.divide(1,L),10000)),10000);
			
			var c11=1; 
			var c12=0;
			var d11=0;
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b11, b12], [b21, b22]]);
			/*		
			var ad21=bd11=bd22=0;
			var ad11=1;
			var ad12= Ts;
			var ad22_1=math.divide(math.multiply(Kf,Ts),J);
			var ad22_2=math.add(1,-math.divide(ad22_1,J));
			var ad22=math.divide(math.round(math.multiply(ad22_2,1000)),1000);
			var bd12=math.divide(math.round(math.multiply(math.divide(math.multiply(Kb,Ts),J),1000)),1000);
			var bd21=math.divide(math.round(math.multiply(math.divide(math.multiply(Kb,Ts),J),1000)),1000);
			*/
			///// for F matrix
			var a1_11 = math.divide(math.round(math.multiply(math.multiply(a11,Ts),10000)),10000);
			var a1_12 = math.divide(math.round(math.multiply(math.multiply(a12,Ts),10000)),10000);
			var a1_21 = math.divide(math.round(math.multiply(math.multiply(a21,Ts),10000)),10000);
			var a1_22 = math.divide(math.round(math.multiply(math.multiply(a22,Ts),10000)),10000);
			
			var a2_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.5,Ts,Ts),10000)),10000);
			var a2_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.5,Ts,Ts),10000)),10000);
			
			var a3_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a11),math.multiply(a2_12,a21)),0.3333,Ts),10000)),10000);
			var a3_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a12),math.multiply(a2_12,a22)),0.3333,Ts),10000)),10000);
			var a3_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a11),math.multiply(a2_22,a21)),0.3333,Ts),10000)),10000);
			var a3_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a12),math.multiply(a2_22,a22)),0.3333,Ts),10000)),10000);
			
			var a4_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a11),math.multiply(a3_12,a21)),0.25,Ts),10000)),10000);
			var a4_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a12),math.multiply(a3_12,a22)),0.25,Ts),10000)),10000);
			var a4_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a11),math.multiply(a3_22,a21)),0.25,Ts),10000)),10000);
			var a4_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a12),math.multiply(a3_22,a22)),0.25,Ts),10000)),10000);
			
			var a5_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a11),math.multiply(a4_12,a21)),0.2,Ts),10000)),10000);
			var a5_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a12),math.multiply(a4_12,a22)),0.2,Ts),10000)),10000);
			var a5_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a11),math.multiply(a4_22,a21)),0.2,Ts),10000)),10000);
			var a5_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a12),math.multiply(a4_22,a22)),0.2,Ts),10000)),10000);
			
			var a6_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a11),math.multiply(a5_12,a21)),0.1667,Ts),10000)),10000);
			var a6_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a12),math.multiply(a5_12,a22)),0.1667,Ts),10000)),10000);
			var a6_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a11),math.multiply(a5_22,a21)),0.1667,Ts),10000)),10000);
			var a6_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a12),math.multiply(a5_22,a22)),0.1667,Ts),10000)),10000);
			
			
			var ad11 = math.divide(math.round(math.multiply(math.add(1,a1_11,a2_11,a3_11,a4_11,a5_11,a6_11),10000)),10000);
			var ad12 = math.divide(math.round(math.multiply(math.add(a1_12,a2_12,a3_12,a4_12,a5_12,a6_12),10000)),10000);
			var ad21 = math.divide(math.round(math.multiply(math.add(a1_21,a2_21,a3_21,a4_21,a5_21,a6_21),10000)),10000);
			var ad22 = math.divide(math.round(math.multiply(math.add(1,a1_22,a2_22,a3_22,a4_22,a5_22,a6_22),10000)),10000);
			
			///// for g matrix
			
			var a1_11b = math.divide(math.round(math.multiply(math.multiply(a11,Ts,0.5),10000)),10000);
			var a1_12b = math.divide(math.round(math.multiply(math.multiply(a12,Ts,0.5),10000)),10000);
			var a1_21b = math.divide(math.round(math.multiply(math.multiply(a21,Ts,0.5),10000)),10000);
			var a1_22b = math.divide(math.round(math.multiply(math.multiply(a22,Ts,0.5),10000)),10000);
			
			var a2_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.1667,Ts,Ts),10000)),10000);
			var a2_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.1667,Ts,Ts),10000)),10000);
			
			var a3_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a11),math.multiply(a2_12b,a21)),0.25,Ts),10000)),10000);
			var a3_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a12),math.multiply(a2_12b,a22)),0.25,Ts),10000)),10000);
			var a3_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a11),math.multiply(a2_22b,a21)),0.25,Ts),10000)),10000);
			var a3_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a12),math.multiply(a2_22b,a22)),0.25,Ts),10000)),10000);
			
			var a4_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a11),math.multiply(a3_12b,a21)),0.2,Ts),10000)),10000);
			var a4_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a12),math.multiply(a3_12b,a22)),0.2,Ts),10000)),10000);
			var a4_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a11),math.multiply(a3_22b,a21)),0.2,Ts),10000)),10000);
			var a4_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a12),math.multiply(a3_22b,a22)),0.2,Ts),10000)),10000);
			
			var a5_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a11),math.multiply(a4_12b,a21)),0.1667,Ts),10000)),10000);
			var a5_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a12),math.multiply(a4_12b,a22)),0.1667,Ts),10000)),10000);
			var a5_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a11),math.multiply(a4_22b,a21)),0.1667,Ts),10000)),10000);
			var a5_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a12),math.multiply(a4_22b,a22)),0.1667,Ts),10000)),10000);
			
			var a6_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a11),math.multiply(a5_12b,a21)),0.1428,Ts),10000)),10000);
			var a6_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a12),math.multiply(a5_12b,a22)),0.1428,Ts),10000)),10000);
			var a6_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a11),math.multiply(a5_22b,a21)),0.1428,Ts),10000)),10000);
			var a6_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a12),math.multiply(a5_22b,a22)),0.1428,Ts),10000)),10000);
			
			var ad11b = math.divide(math.round(math.multiply(math.add(1,a1_11b,a2_11b,a3_11b,a4_11b,a5_11b,a6_11b),10000)),10000);
			var ad12b = math.divide(math.round(math.multiply(math.add(a1_12b,a2_12b,a3_12b,a4_12b,a5_12b,a6_12b),10000)),10000);
			var ad21b = math.divide(math.round(math.multiply(math.add(a1_21b,a2_21b,a3_21b,a4_21b,a5_21b,a6_21b),10000)),10000);
			var ad22b = math.divide(math.round(math.multiply(math.add(1,a1_22b,a2_22b,a3_22b,a4_22b,a5_22b,a6_22b),10000)),10000);
			
			var bd11 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b11,Ts),math.multiply(ad12b,b21,Ts)),10000)),10000);
			var bd12 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b12,Ts),math.multiply(ad12b,b22,Ts)),10000)),10000);
			var bd21 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b11,Ts),math.multiply(ad22b,b21,Ts)),10000)),10000);
			var bd22 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b12,Ts),math.multiply(ad22b,b22,Ts)),10000)),10000);
			
			/* var ad11=math.divide(math.round(math.multiply(math.add(1,-math.divide(math.multiply(Kf,Ts),J)),1000)),1000);
			var ad12=math.divide(math.round(math.multiply(math.divide(math.multiply(Km,Ts),J),1000)),1000);
			var ad21=math.divide(math.round(math.multiply(math.divide(math.multiply(-Kb,Ts),J),1000)),1000);
		    var ad22=math.divide(math.round(math.multiply(math.add(1,-math.divide(math.multiply(R,Ts),L)),1000)),1000);
			
			var bd11=math.divide(math.round(math.multiply(math.divide(math.multiply(Kf,Ts,Ts),math.multiply(J,L)),1000)),1000);
			var bd12=math.divide(math.round(math.multiply(math.add(math.divide(Ts,J),-math.divide(math.multiply(Kf,Ts,Ts),math.multiply(J,J))),1000)),1000);
			var bd21=math.divide(math.round(math.multiply(math.add(math.divide(Ts,L),-math.divide(math.multiply(R,Ts,Ts),math.multiply(L,L))),1000)),1000);
			var bd22=math.divide(math.round(math.multiply(math.divide(math.multiply(-Kb,Ts,Ts),math.multiply(J,J)),1000)),1000);
			 */
			var mF = math.matrix([[ad11, ad12], [ad21, ad22]]);
			var mg = math.matrix([[bd11, bd12], [bd21, bd22]]);
			
			
			document.getElementById('matAd').innerHTML = ' F =['+ ad11+',\t'+ad12+';\t\t'+ad21+','+ad22+']';
			document.getElementById('matBd').innerHTML = ' g =['+ bd11+',\t\t'+bd12+';\t\t'+bd21+','+bd22+']';				
			document.getElementById('matCd').innerHTML = ' C =['+ c11+',\t'+c12+']';
			document.getElementById('matDd').innerHTML = ' D =['+ d11+']';
			            
			
			document.getElementById("run1").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
}
function EP(){
	document.getElementById('tfbody11').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var va = document.getElementById('Va1').value;			
			var td = document.getElementById('Td1').value;
			var tds = document.getElementById('tds1').value;
            var tde = document.getElementById('tde1').value;
			
						
			document.getElementById('plotB').style.visibility="visible";
			
			/*document.getElementById("Pole_Value1").innerHTML=DP1;
			document.getElementById("Pole_Value2").innerHTML=DP2;
			document.getElementById("Pole_Value3").innerHTML=DP3;
			document.getElementById("Pole_Value4").innerHTML=DP4;*/
			
			
			
			
}

////////////////////
    var Cntrl_Test1;
	var Cntrl_Test2;
	var Cntrl_Test3;
	
	
	var dArray1=[],dArray2=[],dArray3=[],dArray4=[];
	
function plotDC(){

	
	var dataOPPoints1=[];	///for plotting chart
    var dataOPPoints2=[];
	
	
	
	        var Km = document.getElementById('Km1').value;			
			var L = document.getElementById('L1').value;
			var R = document.getElementById('R1').value;
			var J = document.getElementById('J1').value;			
			var Kf = document.getElementById('Kf1').value;
			var Kb = document.getElementById('Kb1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
			
			
			var va = document.getElementById('Va1').value;	
			
			var vach = document.getElementById('Vach1').value;	
			var tvas = document.getElementById('tvas1').value;
            var tvae = document.getElementById('tvae1').value;
			var vaa = math.add(va,vach);
			var td = document.getElementById('Td1').value;
			var tds = document.getElementById('tds1').value;
            var tde = document.getElementById('tde1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
			var a11=math.divide(math.round(math.multiply(math.divide(-Kf,J),10000)),10000);
			var a12=math.divide(math.round(math.multiply(math.divide(Km,J),10000)),10000);
			var a21=math.divide(math.round(math.multiply(math.divide(-Kb,L),10000)),10000);
		    var a22=math.divide(math.round(math.multiply(math.divide(-R,L),10000)),10000);
			
		
			
			//var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b11=b22=0;
			var b12=math.divide(math.round(math.multiply(math.divide(1,J),10000)),10000);
			var b21=math.divide(math.round(math.multiply(math.divide(1,L),10000)),10000);
			
			var c11=1; 
			var c12=0;
			var c21=0;
			var c22=1;
			var d11=0;
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b11, b12], [b21, b22]]);
			/*		
			var ad21=bd11=bd22=0;
			var ad11=1;
			var ad12= Ts;
			var ad22_1=math.divide(math.multiply(Kf,Ts),J);
			var ad22_2=math.add(1,-math.divide(ad22_1,J));
			var ad22=math.divide(math.round(math.multiply(ad22_2,1000)),1000);
			var bd12=math.divide(math.round(math.multiply(math.divide(math.multiply(Kb,Ts),J),1000)),1000);
			var bd21=math.divide(math.round(math.multiply(math.divide(math.multiply(Kb,Ts),J),1000)),1000);
			*/
			///// for F matrix
			var a1_11 = math.divide(math.round(math.multiply(math.multiply(a11,Ts),10000)),10000);
			var a1_12 = math.divide(math.round(math.multiply(math.multiply(a12,Ts),10000)),10000);
			var a1_21 = math.divide(math.round(math.multiply(math.multiply(a21,Ts),10000)),10000);
			var a1_22 = math.divide(math.round(math.multiply(math.multiply(a22,Ts),10000)),10000);
			
			var a2_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.5,Ts,Ts),10000)),10000);
			var a2_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.5,Ts,Ts),10000)),10000);
			
			var a3_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a11),math.multiply(a2_12,a21)),0.3333,Ts),10000)),10000);
			var a3_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a12),math.multiply(a2_12,a22)),0.3333,Ts),10000)),10000);
			var a3_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a11),math.multiply(a2_22,a21)),0.3333,Ts),10000)),10000);
			var a3_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a12),math.multiply(a2_22,a22)),0.3333,Ts),10000)),10000);
			
			var a4_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a11),math.multiply(a3_12,a21)),0.25,Ts),10000)),10000);
			var a4_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a12),math.multiply(a3_12,a22)),0.25,Ts),10000)),10000);
			var a4_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a11),math.multiply(a3_22,a21)),0.25,Ts),10000)),10000);
			var a4_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a12),math.multiply(a3_22,a22)),0.25,Ts),10000)),10000);
			
			var a5_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a11),math.multiply(a4_12,a21)),0.2,Ts),10000)),10000);
			var a5_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a12),math.multiply(a4_12,a22)),0.2,Ts),10000)),10000);
			var a5_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a11),math.multiply(a4_22,a21)),0.2,Ts),10000)),10000);
			var a5_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a12),math.multiply(a4_22,a22)),0.2,Ts),10000)),10000);
			
			var a6_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a11),math.multiply(a5_12,a21)),0.1667,Ts),10000)),10000);
			var a6_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a12),math.multiply(a5_12,a22)),0.1667,Ts),10000)),10000);
			var a6_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a11),math.multiply(a5_22,a21)),0.1667,Ts),10000)),10000);
			var a6_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a12),math.multiply(a5_22,a22)),0.1667,Ts),10000)),10000);
			
			
			var ad11 = math.divide(math.round(math.multiply(math.add(1,a1_11,a2_11,a3_11,a4_11,a5_11,a6_11),10000)),10000);
			var ad12 = math.divide(math.round(math.multiply(math.add(a1_12,a2_12,a3_12,a4_12,a5_12,a6_12),10000)),10000);
			var ad21 = math.divide(math.round(math.multiply(math.add(a1_21,a2_21,a3_21,a4_21,a5_21,a6_21),10000)),10000);
			var ad22 = math.divide(math.round(math.multiply(math.add(1,a1_22,a2_22,a3_22,a4_22,a5_22,a6_22),10000)),10000);
			
			///// for g matrix
			
			var a1_11b = math.divide(math.round(math.multiply(math.multiply(a11,Ts,0.5),10000)),10000);
			var a1_12b = math.divide(math.round(math.multiply(math.multiply(a12,Ts,0.5),10000)),10000);
			var a1_21b = math.divide(math.round(math.multiply(math.multiply(a21,Ts,0.5),10000)),10000);
			var a1_22b = math.divide(math.round(math.multiply(math.multiply(a22,Ts,0.5),10000)),10000);
			
			var a2_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.1667,Ts,Ts),10000)),10000);
			var a2_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.1667,Ts,Ts),10000)),10000);
			
			var a3_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a11),math.multiply(a2_12b,a21)),0.25,Ts),10000)),10000);
			var a3_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a12),math.multiply(a2_12b,a22)),0.25,Ts),10000)),10000);
			var a3_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a11),math.multiply(a2_22b,a21)),0.25,Ts),10000)),10000);
			var a3_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a12),math.multiply(a2_22b,a22)),0.25,Ts),10000)),10000);
			
			var a4_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a11),math.multiply(a3_12b,a21)),0.2,Ts),10000)),10000);
			var a4_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a12),math.multiply(a3_12b,a22)),0.2,Ts),10000)),10000);
			var a4_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a11),math.multiply(a3_22b,a21)),0.2,Ts),10000)),10000);
			var a4_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a12),math.multiply(a3_22b,a22)),0.2,Ts),10000)),10000);
			
			var a5_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a11),math.multiply(a4_12b,a21)),0.1667,Ts),10000)),10000);
			var a5_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a12),math.multiply(a4_12b,a22)),0.1667,Ts),10000)),10000);
			var a5_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a11),math.multiply(a4_22b,a21)),0.1667,Ts),10000)),10000);
			var a5_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a12),math.multiply(a4_22b,a22)),0.1667,Ts),10000)),10000);
			
			var a6_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a11),math.multiply(a5_12b,a21)),0.1428,Ts),10000)),10000);
			var a6_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a12),math.multiply(a5_12b,a22)),0.1428,Ts),10000)),10000);
			var a6_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a11),math.multiply(a5_22b,a21)),0.1428,Ts),10000)),10000);
			var a6_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a12),math.multiply(a5_22b,a22)),0.1428,Ts),10000)),10000);
			
			var ad11b = math.divide(math.round(math.multiply(math.add(1,a1_11b,a2_11b,a3_11b,a4_11b,a5_11b,a6_11b),10000)),10000);
			var ad12b = math.divide(math.round(math.multiply(math.add(a1_12b,a2_12b,a3_12b,a4_12b,a5_12b,a6_12b),10000)),10000);
			var ad21b = math.divide(math.round(math.multiply(math.add(a1_21b,a2_21b,a3_21b,a4_21b,a5_21b,a6_21b),10000)),10000);
			var ad22b = math.divide(math.round(math.multiply(math.add(1,a1_22b,a2_22b,a3_22b,a4_22b,a5_22b,a6_22b),10000)),10000);
			
			var bd11 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b11,Ts),math.multiply(ad12b,b21,Ts)),10000)),10000);
			var bd12 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b12,Ts),math.multiply(ad12b,b22,Ts)),10000)),10000);
			var bd21 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b11,Ts),math.multiply(ad22b,b21,Ts)),10000)),10000);
			var bd22 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b12,Ts),math.multiply(ad22b,b22,Ts)),10000)),10000);
			
			/* var ad11=math.divide(math.round(math.multiply(math.add(1,-math.divide(math.multiply(Kf,Ts),J)),1000)),1000);
			var ad12=math.divide(math.round(math.multiply(math.divide(math.multiply(Km,Ts),J),1000)),1000);
			var ad21=math.divide(math.round(math.multiply(math.divide(math.multiply(-Kb,Ts),J),1000)),1000);
		    var ad22=math.divide(math.round(math.multiply(math.add(1,-math.divide(math.multiply(R,Ts),L)),1000)),1000);
			
			var bd11=math.divide(math.round(math.multiply(math.divide(math.multiply(Kf,Ts,Ts),math.multiply(J,L)),1000)),1000);
			var bd12=math.divide(math.round(math.multiply(math.add(math.divide(Ts,J),-math.divide(math.multiply(Kf,Ts,Ts),math.multiply(J,J))),1000)),1000);
			var bd21=math.divide(math.round(math.multiply(math.add(math.divide(Ts,L),-math.divide(math.multiply(R,Ts,Ts),math.multiply(L,L))),1000)),1000);
			var bd22=math.divide(math.round(math.multiply(math.divide(math.multiply(-Kb,Ts,Ts),math.multiply(J,J)),1000)),1000);
			 */
			var mF = math.matrix([[ad11, ad12], [ad21, ad22]]);
			var mg = math.matrix([[bd11, bd12], [bd21, bd22]]);
			
			
			var maxt = 100;
	        var mint = 0;
	
		
            var yop = new Array();	///continous data output result storing
	        var speed = [];
	        var current = [];
	
	        //var x1_ini = 0;
	       // var x2_ini = 0;
	         var x1_up = 0;
	        var x2_up = 0;
			var y1_up = 0;
			var y2_up = 0;
	
           	var	t = mint;
          	while(t<=maxt){
        	//for(var f=minf;f<=maxf;f++){
	        t1=t;
	 
	      //  var x1_up = x1_ini;
	      //  var x2_up = x2_ini;
	        
			// for(tds==t; tds<=tde;tds++){
	        /* x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,Va),math.multiply(bd12,td));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,Va),math.multiply(bd22,td)); */
			
			if(t<tds && t<tvas){
		    x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,va));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,va));
			
			console.log(x1_up);
			console.log(x2_up);
			
			var y1_up = math.add(math.multiply(c11,x1_up),math.multiply(c12,x2_up));
			console.log(y1_up);
			
			var y2_up = math.add(math.multiply(c21,x1_up),math.multiply(c22,x2_up));
			console.log(y2_up);
			
			speed[t] = y1_up;
			dataOPPoints1.push({x:(t), y:(speed[t])});///Speed part
	        dArray1 = dataOPPoints1;
			
			current[t] = y2_up;
			dataOPPoints2.push({x:(t), y:(current[t])});///Current part
	        dArray1 = dataOPPoints2;
			}
			else if(t>=tds && t<=tde && t<tvas){
			x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,va),math.multiply(bd12,td));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,va),math.multiply(bd22,td)); 
			
		    /* x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,va));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,va)); */
			
			console.log(x1_up);
			console.log(x2_up);
			
			var y1_up = math.add(math.multiply(c11,x1_up),math.multiply(c12,x2_up));
			console.log(y1_up);
			
			var y2_up = math.add(math.multiply(c21,x1_up),math.multiply(c22,x2_up));
			console.log(y2_up);
			
			speed[t] = y1_up;
			dataOPPoints1.push({x:(t), y:(speed[t])});///Speed part
	        dArray1 = dataOPPoints1;
			
			current[t] = y2_up;
			dataOPPoints2.push({x:(t), y:(current[t])});///Current part
	        dArray1 = dataOPPoints2;
			}
			else if(t>=tds && t<=tde && t>tvae){
			x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,va),math.multiply(bd12,td));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,va),math.multiply(bd22,td)); 
			
		    /* x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,va));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,va)); */
			
			console.log(x1_up);
			console.log(x2_up);
			
			var y1_up = math.add(math.multiply(c11,x1_up),math.multiply(c12,x2_up));
			console.log(y1_up);
			
			var y2_up = math.add(math.multiply(c21,x1_up),math.multiply(c22,x2_up));
			console.log(y2_up);
			
			speed[t] = y1_up;
			dataOPPoints1.push({x:(t), y:(speed[t])});///Speed part
	        dArray1 = dataOPPoints1;
			
			current[t] = y2_up;
			dataOPPoints2.push({x:(t), y:(current[t])});///Current part
	        dArray1 = dataOPPoints2;
			}
			
			else if(t>=tds && t<=tde && t>tvas && t<tvae){
			x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,vaa),math.multiply(bd12,td));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,vaa),math.multiply(bd22,td)); 
			
		    /* x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,va));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,va)); */
			
			console.log(x1_up);
			console.log(x2_up);
			
			var y1_up = math.add(math.multiply(c11,x1_up),math.multiply(c12,x2_up));
			console.log(y1_up);
			
			var y2_up = math.add(math.multiply(c21,x1_up),math.multiply(c22,x2_up));
			console.log(y2_up);
			
			speed[t] = y1_up;
			dataOPPoints1.push({x:(t), y:(speed[t])});///Speed part
	        dArray1 = dataOPPoints1;
			
			current[t] = y2_up;
			dataOPPoints2.push({x:(t), y:(current[t])});///Current part
	        dArray1 = dataOPPoints2;
			}
			
						
			else if(t>tde && t>=tvas && t<=tvae){
			x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,vaa));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,vaa));
			
			console.log(x1_up);
			console.log(x2_up);
			
			var y1_up = math.add(math.multiply(c11,x1_up),math.multiply(c12,x2_up));
			console.log(y1_up);
			
			var y2_up = math.add(math.multiply(c21,x1_up),math.multiply(c22,x2_up));
			console.log(y2_up);
			
			speed[t] = y1_up;
			dataOPPoints1.push({x:(t), y:(speed[t])});///Speed part
	        dArray1 = dataOPPoints1;
			
			current[t] = y2_up;
			dataOPPoints2.push({x:(t), y:(current[t])});///Current part
	        dArray1 = dataOPPoints2;
			}
			else if(t<tds && t>=tvas && t<=tvae){
			x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,vaa));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,vaa));
			
			console.log(x1_up);
			console.log(x2_up);
			
			var y1_up = math.add(math.multiply(c11,x1_up),math.multiply(c12,x2_up));
			console.log(y1_up);
			
			var y2_up = math.add(math.multiply(c21,x1_up),math.multiply(c22,x2_up));
			console.log(y2_up);
			
			speed[t] = y1_up;
			dataOPPoints1.push({x:(t), y:(speed[t])});///Speed part
	        dArray1 = dataOPPoints1;
			
			current[t] = y2_up;
			dataOPPoints2.push({x:(t), y:(current[t])});///Current part
	        dArray1 = dataOPPoints2;
			}
			
			
			
			else {
				/* x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,Va),math.multiply(bd12,td));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,Va),math.multiply(bd22,td)); */
			
		    x1_up = math.add(math.multiply(ad11,x1_up),math.multiply(ad12,x2_up),math.multiply(bd11,va));
			x2_up = math.add(math.multiply(ad21,x1_up),math.multiply(ad22,x2_up),math.multiply(bd21,va));
			
			console.log(x1_up);
			console.log(x2_up);
			
			var y1_up = math.add(math.multiply(c11,x1_up),math.multiply(c12,x2_up));
			console.log(y1_up);
			
			var y2_up = math.add(math.multiply(c21,x1_up),math.multiply(c22,x2_up));
			console.log(y2_up);
			
			speed[t] = y1_up;
			dataOPPoints1.push({x:(t), y:(speed[t])});///Speed part
	        dArray1 = dataOPPoints1;
			
			current[t] = y2_up;
			dataOPPoints2.push({x:(t), y:(current[t])});///Current part
	        dArray1 = dataOPPoints2;
			}
			t=math.add(t,1);
}

document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "DC Motor Response (Speed vs. Samples) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Samples",
		//logarithmic:true,
		maximum:maxt,
		minimum:mint,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Speed (ω)",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"red",
        dataPoints:dataOPPoints1
	
       }]
       
	});

	chart1.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      animationEnabled: true,
	  zoomEnabled:true,
	  zoomType: "xy",
		  animationDuration: 10000, 
	  title:{
      text: "DC Motor Response (Armature Current vs. Samples) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Samples",
		//logarithmic:true,
		maximum:maxt,
		minimum:mint,
      },
    axisY: 
	      {/////output Y axis
		  //logarithmic: true,
            title: "Armature Current ",
			
			///maximum:0.3,
        },
		
	data:[ 
      {        
        type: "spline",
		color:"red",
		showInLegend:true,
		legendText:"(Sampling Time (Ts) = "+ Ts +")",
        dataPoints:dataOPPoints2
	
       }]
       
	});

	chart2.render();
	document.getElementById("exportChart").style.display = "block";

}

///code for downloading the plot area
function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

function saveImg(){
html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    }); 
	
	
}