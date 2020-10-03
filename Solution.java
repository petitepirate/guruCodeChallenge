/*
Game Calculator

We are going to build a game score calculator. This game is made up, but the rules are simple.

1. A full game is 5 rounds
2. One round consists of 2 plays
3. Each play only allows the player to provide a numerical value of 0 - 10
4. The total of a round can not exceed 10
5. On the last round, if the total of both plays equal 10, then a third play can happen.
6. At the end of all rounds, a print out of each play in each round should be available

Tips:
- think about your data structure
- think about how you may test what you are doing
- steer clear of random numbers


Steps:
1. Update first unit test to track total score and make test pass
2. Only allow positive integers between 0-10
3. Total score for each frame cannot exceed 10
4. Calculate total score after five frames are bowled
*/

import org.junit.*;
import org.junit.runner.*;

public class Solution {

    public Integer calculateScore(int roll1, int roll2) {
        int framescore = roll1 + roll2;
        if (roll1 < 0 || roll2 < 0) {
            throw new IllegalArgumentException("");
        }
        if (roll1 > 10 || roll2 > 10) {
            throw new IllegalArgumentException("");
        }
        return framescore;
    }

    int frame1 = calculateScore(6, 3);

    @Test
    public void testCalculateScoreFrame1() {
        Integer expectedScore = 19;
        Integer calculatedScore = calculateScore(11, 3);

        Assert.assertEquals(expectedScore, calculatedScore);
    }

    public static void main(String[] args) {
        JUnitCore.main("Solution");
    }
}
