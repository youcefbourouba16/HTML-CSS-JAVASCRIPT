using System;

namespace calcolator
{
    static void Main(string[] args)
    {
        double num1, num2, results;
        char op;
        Console.WriteLine("enter the first numer");
        num1 = double.Parse(Console.ReadLine());
        Console.WriteLine("enter the second number");
        num2 = double.Parse(Console.ReadLine());
        Console.WriteLine("enter your operation system(+ - * /)");
        op = char.Parse(Console.ReadLine());

        switch (op)
        {
            case '+':
                results = num1 + num2;
                Console.WriteLine($"Result is: {results}");
                break;
            case '-':
                results = num1 - num2;
                Console.WriteLine($"Result is: {results}");
                break;
            case '*':
                results = num1 * num2;
                Console.WriteLine($"Result is: {results}");
                break;
            case '/':
                results = num1 / num2;
                Console.WriteLine($"Result is: {results}");
                break;
            default:
                Console.WriteLine("ERORR");
                break;


        }

        Console.ReadKey();


    }
}