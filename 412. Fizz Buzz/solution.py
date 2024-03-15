class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        answer = []
        for i in range(1, n + 1):

            a = i % 3 == 0
            b = i % 5 == 0

            if a and b:
                answer.append("FizzBuzz")
            elif a:
                answer.append("Fizz")
            elif b:
                answer.append("Buzz")
            else:
                answer.append(str(i))
        return answer