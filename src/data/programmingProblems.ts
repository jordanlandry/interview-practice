export interface ProgrammingProblemType {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  leetCodeLink: string;
  solutionExplanation: string;
  practicing: string[];
  optimalTime: string;
  optimalSpace: string;
}

const programmingProblems: ProgrammingProblemType[] = [
  {
    id: 1,
    title: "Running Sum of 1d Array",
    description:
      "Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/running-sum-of-1d-array/",
    solutionExplanation: "Loop through the array and add the current number to the previous number. Return the array.",
    practicing: ["Array", "Prefix Sum"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 2,
    title: "Find Pivot Index",
    description:
      "Given an array of integers nums, write a method that returns the 'pivot' index of this array. We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index. If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/find-pivot-index/",
    solutionExplanation:
      "Loop through the array and calculate the sum of the left and right side of the current index. If the left and right side are equal, return the current index. If the loop finishes and no index is found, return -1.",
    practicing: ["Array", "Prefix Sum", "Two Pointers"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 3,
    title: "IsoMorphic Strings",
    description:
      "Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/isomorphic-strings/",
    solutionExplanation: "",
    practicing: ["Hash Table", "String"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 4,
    title: "Is Subsequence",
    description:
      "Given a string s and a string t, check if s is subsequence of t. A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, 'ace' is a subsequence of 'abcde' while 'aec' is not).",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/is-subsequence/",
    solutionExplanation: "",
    practicing: ["String", "Two Pointers"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 5,
    title: "Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
    solutionExplanation: "",
    practicing: ["Linked List", "Recursion"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 6,
    title: "Reverse Linked List",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/reverse-linked-list/",
    solutionExplanation: "",
    practicing: ["Linked List", "Recursion"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 7,
    title: "Middle of the Linked List",
    description:
      "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/middle-of-the-linked-list/",
    solutionExplanation: "",
    practicing: ["Linked List", "Two Pointers"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 8,
    title: "Linked List Cycle II",
    description:
      "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/linked-list-cycle-ii/",
    solutionExplanation: "",
    practicing: ["Linked List", "Hash Table"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 9,
    title: "Best Time to Buy and Sell Stock",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    solutionExplanation: "",
    practicing: ["Array", "Dynamic Programming"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 10,
    title: "Longest Palindrome",
    description:
      "Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters. Letters are case sensitive, for example, 'Aa' is not considered a palindrome here.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/longest-palindrome/",
    solutionExplanation: "",
    practicing: ["Hash Table", "String", "Greedy"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 11,
    title: "Binary Search",
    description:
      "Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/binary-search/",
    solutionExplanation: "",
    practicing: ["Array", "Binary Search"],
    optimalTime: "O(log n)",
    optimalSpace: "O(1)",
  },
  {
    id: 12,
    title: "First Bad Version",
    description:
      "You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/first-bad-version/",
    solutionExplanation: "",
    practicing: ["Binary Search"],
    optimalTime: "O(log n)",
    optimalSpace: "O(1)",
  },
  {
    id: 13,
    title: "Validate Binary Search Tree",
    description:
      "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/validate-binary-search-tree/",
    solutionExplanation: "",
    practicing: ["Tree", "Depth-First Search"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 14,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    description:
      "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. According to the definition of LCA on Wikipedia: The lowest common ancestor of two nodes p and q in a binary tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself).",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    solutionExplanation: "",
    practicing: ["Tree", "Depth-First Search"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 15,
    title: "Flood Fill",
    description:
      "An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc]. To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor. Return the modified image after performing the flood fill.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/flood-fill/",
    solutionExplanation: "",
    practicing: ["Depth-First Search", "Array"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 16,
    title: "Number of Islands",
    description:
      "Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/number-of-islands/",
    solutionExplanation: "",
    practicing: ["Tree", "Depth-First Search"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 17,
    title: "Fibonacci Number",
    description:
      "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is, F(0) = 0, F(1) = 1, F(n) = F(n - 1) + F(n - 2), for n > 1. Given n, calculate F(n).",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/fibonacci-number/",
    solutionExplanation: "",
    practicing: ["Dynamic Programming", "Math"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 18,
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/climbing-stairs/",
    solutionExplanation: "",
    practicing: ["Dynamic Programming", "Math"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 19,
    title: "Min Cost Climbing Stairs",
    description:
      "On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed). Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/min-cost-climbing-stairs/",
    solutionExplanation: "",
    practicing: ["Dynamic Programming", "Array"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 20,
    title: "Unique Paths",
    description:
      "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below). The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/unique-paths/",
    solutionExplanation: "",
    practicing: ["Dynamic Programming", "Math"],
    optimalTime: "O(m * n)",
    optimalSpace: "O(m * n)",
  },
  {
    id: 21,
    title: "Find All Anagrams in a String",
    description:
      "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    solutionExplanation: "",
    practicing: ["Hash Table", "Sliding Window", "String"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 22,
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    solutionExplanation: "",
    practicing: ["Hash Table", "Two Pointers", "String"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 23,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/two-sum/",
    solutionExplanation: "",
    practicing: ["Array", "Hash Table"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 24,
    title: "Bulls and Cows",
    description:
      "You are playing the Bulls and Cows game with your friend. You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info: The number of bulls, which are digits in the guess that are in the correct position. The number of cows, which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls. Given the secret number secret and your friend's guess guess, return the hint for your friend's guess. The hint should be formatted as 'xAyB', where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/bulls-and-cows/",
    solutionExplanation: "",
    practicing: ["Hash Table", "String", "Counting"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 25,
    title: "Backspace String Compare",
    description:
      "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character. Note that after backspacing an empty text, the text will continue empty.",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/backspace-string-compare/",
    solutionExplanation: "",
    practicing: ["Stack", "Two Pointers", "String"],
    optimalTime: "O(n)",
    optimalSpace: "O(1)",
  },
  {
    id: 26,
    title: "Decode String",
    description:
      "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer. You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/decode-string/",
    solutionExplanation: "",
    practicing: ["Stack", "Depth-first Search", "String"],
    optimalTime: "O(n)",
    optimalSpace: "O(n)",
  },
  {
    id: 27,
    title: "Last Stone Weight",
    description:
      "We have a collection of stones, each stone has a positive integer weight. Each turn, we choose the two heaviest stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is: If x == y, both stones are totally destroyed; If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x. At the end, there is at most 1 stone left. Return the weight of this stone (or 0 if there are no stones left.)",
    difficulty: "Easy",
    leetCodeLink: "https://leetcode.com/problems/last-stone-weight/",
    solutionExplanation: "",
    practicing: ["Heap", "Greedy", "Array"],
    optimalTime: "O(n * log(n))",
    optimalSpace: "O(n)",
  },
  {
    id: 28,
    title: "Top K Frequent Elements",
    description:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    difficulty: "Medium",
    leetCodeLink: "https://leetcode.com/problems/top-k-frequent-elements/",
    solutionExplanation: "",
    practicing: ["Heap", "Hash Table", "String", "Trie", "Sorting"],
    optimalTime: "O(n * log(n))",
    optimalSpace: "O(n)",
  },
];

export default programmingProblems;
