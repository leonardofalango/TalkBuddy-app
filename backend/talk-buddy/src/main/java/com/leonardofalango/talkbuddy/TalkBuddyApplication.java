package com.leonardofalango.talkbuddy;

import java.util.ArrayList;
import java.util.List;

// import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.leonardofalango.EuseiFazerMod;
import com.leonardofalango.Ex4;
import com.leonardofalango.Ex5;
import com.leonardofalango.Ex4.ReturnEx4;

@SpringBootApplication
public class TalkBuddyApplication {

	public static void main(String[] args) {
		// SpringApplication.run(TalkBuddyApplication.class, args);
		Calculadora calc = new Calculadora();
		calc.Ex1();


		// Array arr = new Array();
		//arr.GetInput();

		// EuseiFazerMod ex3 = new EuseiFazerMod();
		// ArrayList<Integer> x = ex3.Run();
		// for (int i : x)
		// 	System.out.println(i);

		// Ex4 ex4 = new Ex4();
		// ReturnEx4 ret = ex4.Run();

		// for (int x : ret.getPares())
		// 	System.out.println(x);
		// System.out.println("Quantidade de números impares: " + ret.getImpares());

		Ex5 ex5 = new Ex5();
		ex5.Run();
	}

}
