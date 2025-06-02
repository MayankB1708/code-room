import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers 'nums' and an integer 'target', find indices of two distinct numbers in the array that add up exactly to the target value. Each input is guaranteed to have exactly one solution. You cannot use the same element twice, and you can return the answer in any order.",
    examples: [
      { 
        input: "nums = [2,7,11,15], target = 9", 
        output: "[0,1]",
        explanation: "nums[0] + nums[1] = 2 + 7 = 9, so return [0, 1]"
      },
      { 
        input: "nums = [3,2,4], target = 6", 
        output: "[1,2]",
        explanation: "nums[1] + nums[2] = 2 + 4 = 6, so return [1, 2]"
      },
      { 
        input: "nums = [3,3], target = 6", 
        output: "[0,1]",
        explanation: "nums[0] + nums[1] = 3 + 3 = 6, so return [0, 1]"
      },
    ],
    constraints: [
      "2 <= nums.length <= 10⁴",
      "-10⁹ <= nums[i] <= 10⁹",
      "-10⁹ <= target <= 10⁹",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) { 
  // Your code here 
}`,
      python: `def two_sum(nums, target):
    # Your code here 
    pass`,
      java: `class Solution {
      public int[] twoSum(int[] nums, int target) { 
      // Your code here 
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Your code here
    return {};
}`,

  c: `#include <stdio.h>

void twoSum(int* nums, int numsSize, int target, int* returnSize, int* returnIndices) {
    // Your code here
    *returnSize = 0;
}`
    },
  },
  {
    id: "reverse-linked-list",
    title: "Reverse a Linked List",
    description:
      "Given the head of a singly linked list, reverse the list and return the reversed list.",
    examples: [
      { 
        input: "head = [1,2,3,4,5]", 
        output: "[5,4,3,2,1]",
        explanation: "Reversing the list reverses the order of nodes."
      },
      { 
        input: "head = [1,2]", 
        output: "[2,1]",
        explanation: "The two nodes are swapped in order."
      },
      { 
        input: "head = []", 
        output: "[]",
        explanation: "An empty list remains empty after reversal."
      },
    ],
    constraints: [
      "The number of nodes in the list is the range [0, 5000]",
      "-5000 <= Node.val <= 5000",
    ],
    starterCode: {
      javascript: `function reverseList(head) { 
  // Your code here 
}`,
      python: `def reverse_list(head): 
    # Your code here 
    pass`,
      java: `class Solution {
      public ListNode reverseList(ListNode head) { 
      // Your code here 
    }
}`,
      cpp: `struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    // Your code here
    return nullptr;
}`,

  c: `struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseList(struct ListNode* head) {
    // Your code here
    return NULL;
}`
    },
  },
  {
    id: "valid-parenthesis",
    title: "Valid Parentheses",
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { 
        input: 's = "()"', 
        output: "true",
        explanation: "Parentheses are correctly matched."
      },
      { 
        input: 's = "()[]{}"', 
        output: "true",
        explanation: "All types of parentheses are correctly matched."
      },
      { 
        input: 's = "(]"', 
        output: "false",
        explanation: "Mismatched parentheses cause invalid input."
      },
    ],
    constraints: ["1 <= s.length <= 10⁴", "s consists of parentheses only"],
    starterCode: {
      javascript: `function isValid(s) { 
  // Your code here 
}`,
      python: `def is_valid(s): 
    # Your code here 
    pass`,
      java: `class Solution {
      public boolean isValid(String s) { 
      // Your code here 
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Your code here
}`,
  c: `#include <stdbool.h>
#include <string.h>

// Helper stack implementation would be needed
bool isValid(char *s) {
    // Your code here
}`
    },
  },
  {
    id: "merge-sorted",
    title: "Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return it as a new sorted list.",
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation: "Merging keeps the sorted order of nodes."
      },
      {
        input: "l1 = [], l2 = []",
        output: "[]",
        explanation: "Merging two empty lists results in an empty list."
      },
      {
        input: "l1 = [], l2 = [0]",
        output: "[0]",
        explanation: "An empty list merged with a non-empty list results in the non-empty list."
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 <= Node.val <= 100",
    ],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) { 
  // Your code here 
}`,
      python: `def merge_two_lists(l1, l2): 
    # Your code here 
    pass`,
      java: `class Solution { 
      public ListNode mergeTwoLists(ListNode l1, ListNode l2) { 
      // Your code here 
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

// Definition for singly-linked list node.
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    // Your code here
}`
    },
  },
  {
    id: "buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    description:
      "You are given an array prices where prices[i] is the price of a stock on the ith day. Maximize profit by choosing a day to buy and a future day to sell.",
    examples: [
      { 
        input: "prices = [7,1,5,3,6,4]", 
        output: "5",
        explanation: "Buy at 1 (day 2) and sell at 6 (day 5) for max profit 5."
      },
      { 
        input: "prices = [7,6,4,3,1]", 
        output: "0",
        explanation: "No profitable transaction possible; max profit is 0."
      },
      { 
        input: "prices = [1,2,3,4,5]", 
        output: "4",
        explanation: "Buy at 1 and sell at 5 for max profit 4."
      },
    ],
    constraints: ["1 <= prices.length <= 10⁵", "0 <= prices[i] <= 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) { 
  // Your code here 
}`,
      python: `def max_profit(prices): 
    # Your code here 
    pass`,
      java: `class Solution {
      public int maxProfit(int[] prices) { 
      // Your code here 
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

int maxProfit(int* prices, int pricesSize) {
    // Your code here
}`
    },
  },
  {
    id: "max-subarray",
    title: "Maximum Subarray",
    description:
      "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.",
    examples: [
      { 
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", 
        output: "6",
        explanation: "Subarray [4,-1,2,1] has the largest sum 6."
      },
      { 
        input: "nums = [1]", 
        output: "1",
        explanation: "Single element array; max subarray sum is 1."
      },
      { 
        input: "nums = [5,4,-1,7,8]", 
        output: "23",
        explanation: "Whole array is max subarray with sum 23."
      },
    ],
    constraints: ["1 <= nums.length <= 10⁵", "-10⁴ <= nums[i] <= 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) { 
  // Your code here 
}`,
      python: `def max_sub_array(nums): 
    # Your code here 
    pass`,
      java: `class Solution {
      public int maxSubArray(int[] nums) { 
      // Your code here 
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

int maxSubArray(int* nums, int numsSize) {
    // Your code here
}`
    },
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. Return number of distinct ways to reach the top.",
    examples: [
      { 
        input: "n = 2", 
        output: "2",
        explanation: "Steps: (1+1), (2)"
      },
      { 
        input: "n = 3", 
        output: "3",
        explanation: "Steps: (1+1+1), (1+2), (2+1)"
      },
      { 
        input: "n = 1", 
        output: "1",
        explanation: "Only one step to climb."
      },
    ],
    constraints: ["1 <= n <= 45"],
    starterCode: {
      javascript: `function climbStairs(n) { 
  // Your code here 
}`,
      python: `def climb_stairs(n): 
    # Your code here 
    pass`,
      java: `class Solution {
      public int climbStairs(int n) { 
      // Your code here 
    }
}`,
      cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

int climbStairs(int n) {
    // Your code here
}`
    },
  },
  {
    id: "palindrome",
    title: "Valid Palindrome",
    description:
      "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    examples: [
      { 
        input: 's = "A man, a plan, a canal: Panama"', 
        output: "true",
        explanation: "Ignoring non-alphanumeric and case, string is a palindrome."
      },
      { 
        input: 's = "race a car"', 
        output: "false",
        explanation: "Ignoring spaces and cases, it is not a palindrome."
      },
      { 
        input: 's = ""', 
        output: "true",
        explanation: "Empty string is considered a palindrome."
      },
    ],
    constraints: [
      "1 <= s.length <= 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) { 
  // Your code here 
}`,
      python: `def is_palindrome(s): 
    # Your code here 
    pass`,
      java: `class Solution {
      public boolean isPalindrome(String s) { 
      // Your code here 
    }
}`,
       cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Your code here
    }
};`,

  c: `#include <stdbool.h>
#include <ctype.h>
#include <string.h>

bool isPalindrome(char *s) {
    // Your code here
}`
    },
  },
  {
    id: "detect-cycle",
    title: "Detect Cycle in Linked List",
    description:
      "Given head of a linked list, determine if the linked list has a cycle.",
    examples: [
      {
        input: "head = [3,2,0,-4] (cycle connects to node at index 1)",
        output: "true",
        explanation: "Linked list contains a cycle at node index 1."
      },
      {
        input: "head = [1,2] (no cycle)",
        output: "false",
        explanation: "No cycle present in the list."
      },
      {
        input: "head = []",
        output: "false",
        explanation: "Empty list can't have a cycle."
      },
    ],
    constraints: [
      "0 <= list.length <= 10⁴",
      "-10⁵ <= Node.val <= 10⁵",
    ],
    starterCode: {
      javascript: `function hasCycle(head) { 
  // Your code here 
}`,
      python: `def has_cycle(head): 
    # Your code here 
    pass`,
      java: `class Solution { 
      public boolean hasCycle(ListNode head) { 
      // Your code here 
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(nullptr) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        // Your code here
    }
};`,

  c: `#include <stdbool.h>

// Definition for singly-linked list.
struct ListNode {
    int val;
    struct ListNode *next;
};

bool hasCycle(struct ListNode *head) {
    // Your code here
}`
    },
  },
  // Sliding Window
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      { 
        input: 's = "abcabcbb"', 
        output: "3",
        explanation: "Longest substring without repeats is 'abc'."
      },
      { 
        input: 's = "bbbbb"', 
        output: "1",
        explanation: "All characters same, longest substring is 'b'."
      },
      { 
        input: 's = "pwwkew"', 
        output: "3",
        explanation: "Longest substring without repeats is 'wke'."
      },
    ],
    constraints: ["0 <= s.length <= 5 * 10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) { 
  // Your code here 
}`,
      python: `def length_of_longest_substring(s): 
    # Your code here 
    pass`,
      java: `class Solution { 
      public int lengthOfLongestSubstring(String s) { 
      // Your code here
    } 
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

int lengthOfLongestSubstring(char *s) {
    // Your code here
}`
    },
  },
  // Binary Search on Answers
  {
    id: "ship-packages",
    title: "Capacity To Ship Packages Within D Days",
    description:
      "A conveyor belt has packages. You need to find the least weight capacity so that all packages can be shipped within D days.",
    examples: [
      { 
        input: "weights = [1,2,3,4,5,6,7,8,9,10], D = 5", 
        output: "15",
        explanation: "Optimal capacity is 15 to ship in 5 days."
      },
      { 
        input: "weights = [3,2,2,4,1,4], D = 3", 
        output: "6",
        explanation: "Capacity 6 can ship all packages in 3 days."
      },
      { 
        input: "weights = [1,2,3,1,1], D = 4", 
        output: "3",
        explanation: "Capacity 3 sufficient to ship in 4 days."
      },
    ],
    constraints: [
      "1 <= D <= weights.length <= 5 * 10⁴",
      "1 <= weights[i] <= 500",
    ],
    starterCode: {
      javascript: `function shipWithinDays(weights, D) { 
  // Your code here 
}`,
      python: `def ship_within_days(weights, D): 
    # Your code here 
    pass`,
      java: `class Solution { 
      public int shipWithinDays(int[] weights, int D) { 
      // Your code here 
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int shipWithinDays(vector<int>& weights, int D) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

int shipWithinDays(int* weights, int weightsSize, int D) {
    // Your code here
}`
    },
  },
  // Dynamic Programming
  {
    id: "LIS",
    title: "Longest Increasing Subsequence",
    description:
       `
Given an integer array 'nums', return the length of the longest strictly increasing subsequence.
A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
    `.trim(),
    examples: [
      { 
        input: "nums = [10,9,2,5,3,7,101,18]", 
        output: "4",
        explanation: "Longest increasing subsequence is [2,3,7,101]."
      },
      { 
        input: "nums = [0,1,0,3,2,3]", 
        output: "4",
        explanation: "Longest increasing subsequence is [0,1,2,3]."
      },
      { 
        input: "nums = [7,7,7,7,7,7,7]", 
        output: "1",
        explanation: "All elements equal, so longest subsequence is length 1."
      },
    ],
    constraints: ["1 <= nums.length <= 2500", "-10⁴ <= nums[i] <= 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) { 
  // Your code here 
}`,
      python: `def length_of_lis(nums): 
    # Your code here 
    pass`,
      java: `class Solution { 
      public int lengthOfLIS(int[] nums) { 
      // Your code here
    }
}`,  
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

int lengthOfLIS(int* nums, int numsSize) {
    // Your code here
}`
    },
  },
  // Graphs
  {
    id: "number-of-islands",
    title: "Number of Islands",
    description:
      "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands. An island is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.",
    examples: [
      {
        input: `grid = [
          ["1","1","1","1","0"],
          ["1","1","0","1","0"],
          ["1","1","0","0","0"],
          ["0","0","0","0","0"]
        ]`,
        output: "1",
        explanation: "All connected '1's form one island."
      },
      {
        input: `grid = [
          ["1","1","0","0","0"],
          ["1","1","0","0","0"],
          ["0","0","1","0","0"],
          ["0","0","0","1","1"]
        ]`,
        output: "3",
        explanation: "There are 3 separate islands in the grid."
      },
      {
        input: `grid = [["0"]]`,
        output: "0",
        explanation: "No land cells, so zero islands."
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is '0' or '1'.",
    ],
    starterCode: {
      javascript: `function numIslands(grid) { 
  // Your code here 
}`,
      python: `def num_islands(grid): 
    # Your code here 
    pass`,
      java: `class Solution { 
      public int numIslands(char[][] grid) { 
      // Your code here 
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        // Your code here
    }
};`,

  c: `#include <stdlib.h>

int numIslands(char** grid, int gridSize, int* gridColSize) {
    // Your code here
}`
    },
  },
  {
    id: "course-schedule",
    title: "Course Schedule",
    description: `
You are given 'numCourses' courses labeled from 0 to numCourses-1. 
Some courses may have prerequisites given as pairs [a, b] meaning you must take course b before course a. 
Determine if it is possible to finish all courses, i.e., if there is no cycle in the prerequisites.
    `.trim(),
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "Course 0 can be taken first, then course 1."
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation: "There is a cycle between courses 0 and 1, so it's impossible to finish."
      },
      {
        input: "numCourses = 4, prerequisites = [[1,0],[2,1],[3,2]]",
        output: "true",
        explanation: "A valid order is 0 -> 1 -> 2 -> 3, no cycles."
      }
    ],
    constraints: [
      "1 <= numCourses <= 10^5",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "0 <= prerequisites[i][j] < numCourses"
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Your code here
}`,
      python: `def can_finish(numCourses, prerequisites):
    # Your code here
    pass`,
      java: `public boolean canFinish(int numCourses, int[][] prerequisites) {
    // Your code here
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        // Your code here
    }
};`,

  c: `#include <stdbool.h>
#include <stdlib.h>

bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize) {
    // Your code here
}`
    }
  },
  {
    id: "number-of-connected-components-in-graph",
    title: "Number of Connected Components in an Undirected Graph",
    description: `
You have 'n' nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes). 
Return the number of connected components in the graph.
    `.trim(),
    examples: [
      {
        input: "n = 5, edges = [[0,1],[1,2],[3,4]]",
        output: "2",
        explanation: "There are two connected components: {0,1,2} and {3,4}."
      },
      {
        input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        output: "1",
        explanation: "All nodes are connected, so one component."
      },
      {
        input: "n = 3, edges = []",
        output: "3",
        explanation: "No edges, so each node is a separate component."
      }
    ],
    constraints: [
      "1 <= n <= 10^4",
      "0 <= edges.length <= 10^4",
      "edges[i].length == 2",
      "0 <= edges[i][j] < n"
    ],
    starterCode: {
      javascript: `function countComponents(n, edges) {
  // Your code here
}`,
      python: `def count_components(n, edges):
    # Your code here
    pass`,
      java: `public int countComponents(int n, int[][] edges) {
    // Your code here
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        // Your code here
    }
};`,

  c: `#include <stdbool.h>
#include <stdlib.h>

int countComponents(int n, int** edges, int edgesSize, int* edgesColSize) {
    // Your code here
}`
    }
  },
  {
    id: "word-ladder",
    title: "Word Ladder",
    description: `
Given two words 'beginWord' and 'endWord', and a dictionary 'wordList', 
return the length of the shortest transformation sequence from beginWord to endWord such that:
- Only one letter can be changed at a time.
- Each transformed word must exist in the wordList.
Return 0 if no such sequence exists.
    `.trim(),
    examples: [
      {
        input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
        output: "5",
        explanation: "One shortest sequence is 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog'."
      },
      {
        input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
        output: "0",
        explanation: "EndWord 'cog' is not in wordList, so no transformation."
      },
      {
        input: "beginWord = 'a', endWord = 'c', wordList = ['a','b','c']",
        output: "2",
        explanation: "'a' -> 'c' or 'a' -> 'b' -> 'c' (shortest is length 2)."
      }
    ],
    constraints: [
      "1 <= wordList.length <= 5000",
      "1 <= beginWord.length <= 10",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters."
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Your code here
}`,
      python: `def ladder_length(beginWord, endWord, wordList):
    # Your code here
    pass`,
      java: `public int ladderLength(String beginWord, String endWord, List<String> wordList) {
    // Your code here
}`,
      cpp:`#include<bits/stdc++.h>
      using namespace std;
      
      int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    // Your code here
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int ladderLength(char* beginWord, char* endWord, char** wordList, int wordListSize) {
    // Your code here
    return 0;
}`
    }
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
  { id: "cpp", name: "C++", icon: "/cpp.png"},
  { id: "c", name: "C", icon: "/c.png"},
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
    cpp: string;
    c: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
