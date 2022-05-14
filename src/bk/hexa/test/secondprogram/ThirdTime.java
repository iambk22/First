package bk.hexa.test.secondprogram;

import bk.krish.test.firstprgm.FirstTime;
import bk.krish.test.firstprgm.SecondTime;

public class ThirdTime {
     private void fatherName() {
		System.out.println("Sekar");

	}

     private void fatherNameIsNot() {
	    System.out.println("Sehaar");

	}
     public static void main(String[] args) {
		ThirdTime a = new ThirdTime();
		a.fatherName();
		a.fatherNameIsNot();
		
		FirstTime b = new FirstTime();
		b.myName();
		b.myNameIsNot();
		
		SecondTime c = new SecondTime();
		c.sisterName();
		c.sisterNameIsNot();
	}
}
