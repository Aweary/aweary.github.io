



function addClass($title, $teacher, $days){

	localStorage.setItem('gameStorage', JSON.stringify($title));
	$classes[$title] = {teacher : $teacher, days: $days};

}


var $classes = {

	precalculus : {
		subject: "Precalculus",
		teacher : "Weilin Jiang",
		days : "Tuesday // Thursday",
		objectives : ["Sketch graphs and appropriate transformations for the following: polynomial functions (linear, quadratic, followed by those with degree three and higher), trigonometric functions, exponential and logarithmic functions, rational functions, and conic sections.", "Solve applied problems using the appropriate functions.", "Be able to use function notation to evaluate expressions and perform operations on functions such as addition, subtraction, multiplication, division, and composition of functions. Be able to find the domain of functions.", "Find the inverse of one-to-one function", "Solve systems of equations, both linear and non-linear", "Work introductory exercices using polar coordinates, parametric functions, and vectors", "Work introductory exercices from topics in discrete mathematics, such as sequences and series", "Solve equations containing trigonometric functions both in routine exercices and applied problems." ],
		notes : [
				{
					date: new Date(2014, 7, 26),
					content: "<div> <br/> </div> <div> tags: trig, radian, degree, reference angle, quadrants, 4-term polynominal </div> <div> <br/> </div> <div> <br/> </div> <div> *Reviewed the six Trig functions </div> <div> <br/> </div> <div> <br/> </div> <div> <br/> </div> <div> I &gt; Definition of Six Trig Functions </div> <div> <br/> </div> <div> Sin = y / r </div> <div> Cos = x / r </div> <div> Tan = y / x </div> <div> <br/> </div> <div> Csc = r / y </div> <div> Sec = r / x </div> <div> Cot = x / y </div> <div> <br/> </div> <div> <br/> </div> <div> II &gt; Sign of Trug Functions </div> <div> <br/> </div> <div> <br/> </div> <div> Defining sign of sin/cos/tan in quadrants </div> <div> Quad I - All (all of them) </div> <div> Quad II - Students (sin is positive) </div> <div> Quad III - Take (tan is positive) </div> <div> Quad IV - Calculus (cos is positive) </div> <div> <br/> </div> <div> <br/> </div> <div> <br/> </div> <div> <br/> </div> <div> III &gt; Special Value of Trig Between 0:90 DEG </div> <div> <br/> </div> <div> Review conversion of degrees/radians </div> <div> <br/> </div> <div> <br/> </div> <div> DEG 0 30 45 60 90 </div> <div> RAD 0 π/6 π/4 π/3 π/2 </div> <div> # # # # # # # # # # # # # # # # # # </div> <div> <br/> </div> <div> SIN 0 1/2 Sq2/2 Sq3/2 1 </div> <div> <br/> </div> <div> COS 1 Sq3/2 Sq2/2 1/2 0 </div> <div> <br/> </div> <div> TAN 0 Sq3/3 1 Sq3 NaN </div> <div> <br/> </div> <div> <br/> </div> <div> <br/> </div> <div> IV &gt; Reference Angle </div> <div> <br/> </div> <div> <br/> </div> <div> Review this !important. </div> <div> <br/> </div> <div> <br/> </div> <div> V &gt; Graph of Trig Functions </div> <div> <br/> </div> <div> <br/> </div> <div> Even functions: equal from point of origin </div> <div> Odd functions: opposite from point of origin </div> <div> <br/> </div> <div> <br/> </div> <div> <br/> </div> <div> VI &gt; Identities </div> <div> <br/> </div> <div> <br/> </div> <div> Review this !important. </div> <div> <br/> </div> <div> sin(-x) = -sin x; </div> <div> cos(-x) = cos x; </div> <div> tan(-x) = -tan x; </div> <div> tanø = sinø / cosø -- cotø = cosø / sinø; </div> <div> <br/> </div> <div> VII &gt; Factoring </div> <div> <br/> </div> <div> Review GCF and LCM </div> <div> 4-term polynominal </div> <div> Trinomial </div> <div> Cross multiplication table </div> <div> Binominal </div> <div> a^2 + b^2 - prime </div> <div> a^2 - b^2 = (a+b)(a - b) </div> <div> a^3 + b^3 = (a+b)(a^2 - ab + b^2) </div> <div> a^3 - b^3 = (a-b)(a^2+ ab + b^2) </div> <div> <br/> </div> <div> <br/> </div>",
					tags: ["trig", "radian", "degree", "reference angle", "quadrants", "4-term polynominal"]
				}


				],
		homework :  {
						duedate : new Date(2014, 8, 02)

					}
	},

		prog : {
		subject: "Programming",
		teacher : "NA",
		days : "Tuesday // Thursday",
		objectives : ["NA"]
			}



}

var $objectivesList = $classes.precalculus.objectives.join("<li> <br> </li>")


document.getElementById('class_1_subject').innerHTML = $classes.precalculus.subject;
document.getElementById('class_1_teacher').innerHTML = $classes.precalculus.teacher;
document.getElementById('class_1_days').innerHTML = $classes.precalculus.days;
document.getElementById('class_1_objectives').innerHTML += $objectivesList;
document.getElementById('class_1_homework').innerHTML += $classes.precalculus.homework.duedate;


document.getElementById('class_2_subject').innerHTML = $classes.prog.subject;
document.getElementById('class_2_teacher').innerHTML = $classes.prog.teacher;
document.getElementById('class_2_days').innerHTML = $classes.prog.days;


