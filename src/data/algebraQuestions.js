const qustionsArr = [
  {
          "id": 1,
          "questionHindi": "यदि 3x + 7 = 19 है, तो x का मान क्या है?",
          "questionEnglish": "If 3x + 7 = 19, then what is the value of x?",
          "option": ["2", "4", "6", "8"],
          "answer": ["4"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 2,
          "questionHindi": "y के लिए हल करें: 5y - 12 = 8",
          "questionEnglish": "Solve for y: 5y - 12 = 8",
          "option": ["3", "4", "5", "6"],
          "answer": ["4"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 3,
          "questionHindi": "यदि x + 9 = -2 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If x + 9 = -2, then what is the value of x.",
          "option": ["-7", "-11", "7", "11"],
          "answer": ["-11"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 4,
          "questionHindi": "'a' का मान ज्ञात कीजिए: 2a - 7 = 3a + 1",
          "questionEnglish": "Solve for 'a': 2a - 7 = 3a + 1",
          "option": ["-6", "-8", "-10", "-12"],
          "answer": ["-8"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 5,
          "questionHindi": "'b' का मान ज्ञात कीजिए: 4b/3 = 12",
          "questionEnglish": "Find the value of 'b': 4b/3 = 12",
          "option": ["6", "8", "9", "12"],
          "answer": ["9"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 6,
          "questionHindi": "यदि 2(x - 3) = 8, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 2(x - 3) = 8, then what is the value of x.",
          "option": ["5", "7", "9", "11"],
          "answer": ["7"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 7,
          "questionHindi": "'m' के लिए हल करें: 3(m + 2) = 15",
          "questionEnglish": "Solve for 'm': 3(m + 2) = 15",
          "option": ["1", "3", "5", "7"],
          "answer": ["3"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 8,
          "questionHindi": "यदि 7x/3 - 2 = 5, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 7x/3 - 2 = 5, then what is the value of x.",
          "option": ["2", "3", "4", "5"],
          "answer": ["3"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 9,
          "questionHindi": "'p' के लिए हल करें: (p - 1)/4 = 3",
          "questionEnglish": "Solve for 'p': (p - 1)/4 = 3",
          "option": ["11", "12", "13", "14"],
          "answer": ["13"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 10,
          "questionHindi": "यदि 5(x + 2) - 3(x - 1) = 17, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 5(x + 2) - 3(x - 1) = 17, then what is the value of x.",
          "option": ["4", "5", "6", "7"],
          "answer": ["4"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 11,
          "questionHindi": "यदि दो क्रमागत संख्याओं का योग 37 है, तो छोटी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the sum of two consecutive numbers is 37, find the smaller number.",
          "option": ["17", "18", "19", "20"],
          "answer": ["18"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 12,
          "questionHindi": "चार गुना एक संख्या में 7 जोड़ने पर 35 प्राप्त होता है। संख्या ज्ञात कीजिए।",
          "questionEnglish": "Seven added to four times a number is 35. Find the number.",
          "option": ["5", "7", "9", "11"],
          "answer": ["7"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 13,
          "questionHindi": "यदि एक आयत की लंबाई उसकी चौड़ाई से 3 सेमी अधिक है और उसका परिमाप 34 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 3 cm more than its width and its perimeter is 34 cm, find the width.",
          "option": ["6 cm", "7 cm", "8 cm", "9 cm"],
          "answer": ["7 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 14,
          "questionHindi": "दो संख्याओं का योग 42 है। यदि एक संख्या दूसरी संख्या से 8 अधिक है, तो छोटी संख्या ज्ञात कीजिए।",
          "questionEnglish": "The sum of two numbers is 42. If one number is 8 more than the other, find the smaller number.",
          "option": ["17", "18", "19", "20"],
          "answer": ["17"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 15,
          "questionHindi": "एक दुकानदार एक पुस्तक 150 रुपये में बेचता है और 25 रुपये का लाभ कमाता है। पुस्तक का क्रय मूल्य ज्ञात कीजिए।",
          "questionEnglish": "A shopkeeper sells a book for Rs. 150 and makes a profit of Rs. 25. Find the cost price of the book.",
          "option": ["Rs. 100", "Rs. 125", "Rs. 175", "Rs. 200"],
          "answer": ["Rs. 125"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 16,
          "questionHindi": "यदि 4x + 3 = 2x - 5 है, तो x का मान क्या है?",
          "questionEnglish": "If 4x + 3 = 2x - 5, then what is the value of x.",
          "option": ["-2", "-4", "-6", "-8"],
          "answer": ["-4"],
          "topic": "algebra",
          "subtopic": "linear equations"
      }, {
          "id": 17,
          "questionHindi": "यदि 2(x + 5) = 3(x - 1), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 2(x + 5) = 3(x - 1), then what is the value of x.",
          "option": ["8", "11", "13", "15"],
          "answer": ["13"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 18,
          "questionHindi": "यदि 5/x = 10, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 5/x = 10, then what is the value of x.",
          "option": ["0.5", "1", "2", "5"],
          "answer": ["0.5"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 19,
          "questionHindi": "यदि 4x - 3 = 2x + 7, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 4x - 3 = 2x + 7, then what is the value of x.",
          "option": ["3", "4", "5", "6"],
          "answer": ["5"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 20,
          "questionHindi": "यदि (x - 1)/3 = (x + 1)/2, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If (x - 1)/3 = (x + 1)/2, then what is the value of x.",
          "option": ["-1", "1", "3", "5"],
          "answer": ["-5"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 21,
          "questionHindi": "दो क्रमागत सम संख्याओं का योग 46 है। छोटी संख्या ज्ञात कीजिए।",
          "questionEnglish": "The sum of two consecutive even numbers is 46. Find the smaller number.",
          "option": ["20", "22", "24", "26"],
          "answer": ["22"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 22,
          "questionHindi": "तीन क्रमागत विषम संख्याओं का योग 57 है। मध्य संख्या ज्ञात कीजिए।",
          "questionEnglish": "The sum of three consecutive odd numbers is 57. Find the middle number.",
          "option": ["17", "19", "21", "23"],
          "answer": ["19"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 23,
          "questionHindi": "यदि किसी संख्या का 1/5 भाग 12 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 1/5 of a number is 12, find the number.",
          "option": ["30", "40", "50", "60"],
          "answer": ["60"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 24,
          "questionHindi": "यदि किसी संख्या में से 15 घटाने पर परिणाम 30 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 15 is subtracted from a number, the result is 30. Find the number.",
          "option": ["15", "25", "35", "45"],
          "answer": ["45"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 25,
          "questionHindi": "एक दुकानदार एक किताब 180 रुपये में बेचता है और 30 रुपये का लाभ कमाता है। किताब का क्रय मूल्य ज्ञात कीजिए।",
          "questionEnglish": "A shopkeeper sells a book for Rs. 180 and makes a profit of Rs. 30. Find the cost price of the book.",
          "option": ["Rs. 120", "Rs. 150", "Rs. 210", "Rs. 240"],
          "answer": ["Rs. 150"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 26,
          "questionHindi": "यदि दो संख्याओं का अंतर 20 है और उनका योग 60 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the difference between two numbers is 20 and their sum is 60, find the larger number.",
          "option": ["20", "30", "40", "50"],
          "answer": ["40"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 27,
          "questionHindi": "यदि किसी आयत की लंबाई उसकी चौड़ाई से 10 सेमी अधिक है और उसका परिमाप 52 सेमी है, तो आयत की लंबाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 10 cm more than its width and its perimeter is 52 cm, find the length of the rectangle.",
          "option": ["13 cm", "15 cm", "17 cm", "19 cm"],
          "answer": ["16 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 28,
          "questionHindi": "यदि तीन क्रमागत पूर्ण संख्याओं का योग 48 है, तो मध्य संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the sum of three consecutive integers is 48, find the middle number.",
          "option": ["14", "15", "16", "17"],
          "answer": ["16"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 29,
          "questionHindi": "यदि किसी संख्या का 1/6 भाग 12 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 1/6 of a number is 12, find the number.",
          "option": ["36", "48", "60", "72"],
          "answer": ["72"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 30,
          "questionHindi": "यदि किसी संख्या में से 20 जोड़ने पर परिणाम 45 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 20 is added to a number, the result is 45. Find the number.",
          "option": ["15", "25", "35", "45"],
          "answer": ["25"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 31,
          "questionHindi": "यदि 6x - 5 = 2x + 11 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 6x - 5 = 2x + 11, then what is the value of x.",
          "option": ["2", "3", "4", "5"],
          "answer": ["4"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 32,
          "questionHindi": "यदि 3(x - 2) = 5(x + 1), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 3(x - 2) = 5(x + 1), then what is the value of x.",
          "option": ["-3.5", "-2.5", "-1.5", "-0.5"],
          "answer": ["-3.5"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },{
          "id": 33,
          "questionHindi": "यदि 1/x + 1/3 = 1/2, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 1/x + 1/3 = 1/2, then what is the value of x.",
          "option": ["-6", "-3", "3", "6"],
          "answer": ["6"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 34,
          "questionHindi": "यदि 2x/5 - 1/4 = 1/2, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 2x/5 - 1/4 = 1/2, then what is the value of x.",
          "option": ["5/4", "3/4", "1", "1/4"],
          "answer": ["15/8"], 
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 35,
          "questionHindi": "यदि किसी संख्या का 18% 45 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 18% of a number is 45, then what is the number.",
          "option": ["200", "250", "300", "350"],
          "answer": ["250"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 36,
          "questionHindi": "यदि किसी संख्या में से 10% घटाने पर परिणाम 90 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 10% of a number is subtracted from the number, the result is 90. Find the number.",
          "option": ["90", "100", "110", "120"],
          "answer": ["100"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 37,
          "questionHindi": "यदि दो संख्याओं का अनुपात 2:7 है और उनका योग 45 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the ratio of two numbers is 2:7 and their sum is 45, find the larger number.",
          "option": ["20", "25", "30", "35"],
          "answer": ["35"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 38,
          "questionHindi": "यदि किसी आयत की लंबाई उसकी चौड़ाई से 6 सेमी अधिक है और उसका परिमाप 44 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 6 cm more than its width and its perimeter is 44 cm, find the width.",
          "option": ["8 cm", "9 cm", "10 cm", "11 cm"],
          "answer": ["8 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 39,
          "questionHindi": "यदि किसी संख्या का 2/5 भाग 16 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 2/5 of a number is 16, find the number.",
          "option": ["20", "30", "40", "50"],
          "answer": ["40"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 40,
          "questionHindi": "यदि किसी संख्या में 12 जोड़ने पर परिणाम उस संख्या के तीन गुने के बराबर होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 12 is added to a number, the result is equal to three times the number. Find the number.",
          "option": ["4", "5", "6", "7"],
          "answer": ["6"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 41,
          "questionHindi": "यदि दो संख्याओं का अंतर 14 है और उनका अनुपात 3:5 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the difference between two numbers is 14 and their ratio is 3:5, then find the larger number.",
          "option": ["28", "35", "42", "49"],
          "answer": ["35"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 42,
          "questionHindi": "यदि 9x + 2 = 3x - 10 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 9x + 2 = 3x - 10, then what is the value of x.",
          "option": ["-2", "-1", "0", "1"],
          "answer": ["-2"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 43,
          "questionHindi": "यदि 4(x - 3) = 2(x + 1), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 4(x - 3) = 2(x + 1), then what is the value of x.",
          "option": ["5", "6", "7", "8"],
          "answer": ["7"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 44,
          "questionHindi": "यदि 1/x + 1/5 = 1/2, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 1/x + 1/5 = 1/2, then what is the value of x.",
          "option": ["10/3", "5/3", "2/3", "1/3"],
          "answer": ["10/3"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 45,
          "questionHindi": "यदि 3x/5 - 1/4 = 1/2, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 3x/5 - 1/4 = 1/2, then what is the value of x.",
          "option": ["5/4", "3/4", "1", "1/4"],
          "answer": ["5/4"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 46,
          "questionHindi": "यदि किसी संख्या का 25% 60 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 25% of a number is 60, then what is the number.",
          "option": ["120", "150", "200", "240"],
          "answer": ["240"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 47,
          "questionHindi": "यदि किसी संख्या में से 15% घटाने पर परिणाम 85 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 15% of a number is subtracted from the number, the result is 85. Find the number.",
          "option": ["85", "100", "115", "120"],
          "answer": ["100"],
          "topic": "algebra",
          "subtopic": "linear equations"
      }, {
          "id": 48,
          "questionHindi": "यदि दो संख्याओं का अनुपात 3:8 है और उनका योग 55 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the ratio of two numbers is 3:8 and their sum is 55, then find the larger number.",
          "option": ["20", "30", "40", "44"],
          "answer": ["40"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 49,
          "questionHindi": "यदि किसी आयत की लंबाई उसकी चौड़ाई से 7 सेमी अधिक है और उसका परिमाप 46 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 7 cm more than its width and its perimeter is 46 cm, find the width.",
          "option": ["8 cm", "9 cm", "10 cm", "11 cm"],
          "answer": ["9 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 50,
          "questionHindi": "यदि किसी संख्या का 3/7 भाग 21 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 3/7 of a number is 21, find the number.",
          "option": ["35", "42", "49", "56"],
          "answer": ["49"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 51,
          "questionHindi": "यदि किसी संख्या में 18 जोड़ने पर परिणाम उस संख्या के दोगुने के बराबर होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 18 is added to a number, the result is equal to twice the number. Find the number.",
          "option": ["9", "10", "11", "12"],
          "answer": ["18"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 52,
          "questionHindi": "यदि दो संख्याओं का अंतर 12 है और उनका अनुपात 1:3 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the difference between two numbers is 12 and their ratio is 1:3, then find the larger number.",
          "option": ["12", "18", "24", "30"],
          "answer": ["18"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 53,
          "questionHindi": "यदि 10x + 3 = 4x - 9 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 10x + 3 = 4x - 9, then what is the value of x.",
          "option": ["-2", "-1", "0", "1"],
          "answer": ["-2"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 54,
          "questionHindi": "यदि 5(x - 2) = 3(x + 4), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 5(x - 2) = 3(x + 4), then what is the value of x.",
          "option": ["8", "9", "10", "11"],
          "answer": ["11"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 55,
          "questionHindi": "यदि 1/x + 1/6 = 1/3, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 1/x + 1/6 = 1/3, then what is the value of x.",
          "option": ["2", "3", "4", "6"],
          "answer": ["2"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 56,
          "questionHindi": "यदि 2x/3 - 1/4 = 1/6, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 2x/3 - 1/4 = 1/6, then what is the value of x.",
          "option": ["1/2", "1", "3/4", "1 1/4"],
          "answer": ["1/2"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 57,
          "questionHindi": "यदि किसी संख्या का 16% 32 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 16% of a number is 32, then what is the number.",
          "option": ["150", "200", "250", "300"],
          "answer": ["200"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 58,
          "questionHindi": "यदि किसी संख्या में से 22% घटाने पर परिणाम 78 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 22% of a number is subtracted from the number, the result is 78. Find the number.",
          "option": ["90", "100", "110", "120"],
          "answer": ["100"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 59,
          "questionHindi": "यदि दो संख्याओं का अनुपात 5:9 है और उनका योग 56 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the ratio of two numbers is 5:9 and their sum is 56, then find the larger number.",
          "option": ["27", "30", "36", "42"],
          "answer": ["36"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 60,
          "questionHindi": "यदि किसी आयत की लंबाई उसकी चौड़ाई से 9 सेमी अधिक है और उसका परिमाप 54 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 9 cm more than its width and its perimeter is 54 cm, find the width.",
          "option": ["8 cm", "9 cm", "10 cm", "11 cm"],
          "answer": ["9 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 61,
          "questionHindi": "यदि किसी संख्या का 4/9 भाग 20 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 4/9 of a number is 20, find the number.",
          "option": ["36", "45", "54", "63"],
          "answer": ["45"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 62,
          "questionHindi": "यदि किसी संख्या में 20 जोड़ने पर परिणाम उस संख्या के चार गुने के बराबर होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 20 is added to a number, the result is equal to four times the number. Find the number.",
          "option": ["5", "6", "7", "8"],
          "answer": ["6.67"],
          "topic": "algebra",
          "subtopic": "linear equations"
      }, {
          "id": 63,
          "questionHindi": "यदि दो संख्याओं का अंतर 16 है और उनका अनुपात 2:5 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the difference between two numbers is 16 and their ratio is 2:5, then find the larger number.",
          "option": ["20", "30", "40", "50"],
          "answer": ["40"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 64,
          "questionHindi": "यदि 11x + 5 = 2x - 10 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 11x + 5 = 2x - 10, then what is the value of x.",
          "option": ["-5/3", "-5/2", "-3/2", "-1"],
          "answer": ["-5/3"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 65,
          "questionHindi": "यदि 6(x - 3) = 4(x + 1), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 6(x - 3) = 4(x + 1), then what is the value of x.",
          "option": ["8", "9", "10", "11"],
          "answer": ["10"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 66,
          "questionHindi": "यदि 1/x + 1/7 = 1/4, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 1/x + 1/7 = 1/4, then what is the value of x.",
          "option": ["18.67", "19.67", "20.67", "21.67"],
          "answer": ["28/3"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 67,
          "questionHindi": "यदि 3x/4 - 1/5 = 1/10, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 3x/4 - 1/5 = 1/10, then what is the value of x.",
          "option": ["1/2", "2/3", "3/4", "1"],
          "answer": ["1/2"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 68,
          "questionHindi": "यदि किसी संख्या का 28% 56 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 28% of a number is 56, then what is the number.",
          "option": ["150", "200", "250", "300"],
          "answer": ["200"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 69,
          "questionHindi": "यदि किसी संख्या में से 12% घटाने पर परिणाम 88 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 12% of a number is subtracted from the number, the result is 88. Find the number.",
          "option": ["90", "100", "110", "120"],
          "answer": ["100"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 70,
          "questionHindi": "यदि दो संख्याओं का अनुपात 7:3 है और उनका योग 80 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the ratio of two numbers is 7:3 and their sum is 80, then find the larger number.",
          "option": ["42", "49", "56", "63"],
          "answer": ["56"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 71,
          "questionHindi": "यदि किसी आयत की लंबाई उसकी चौड़ाई से 5 सेमी अधिक है और उसका परिमाप 42 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 5 cm more than its width and its perimeter is 42 cm, find the width.",
          "option": ["8 cm", "9 cm", "10 cm", "11 cm"],
          "answer": ["8 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 72,
          "questionHindi": "यदि किसी संख्या का 5/9 भाग 30 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 5/9 of a number is 30, find the number.",
          "option": ["45", "50", "54", "60"],
          "answer": ["54"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 73,
          "questionHindi": "यदि किसी संख्या में 15 जोड़ने पर परिणाम उस संख्या के तीन गुने के बराबर होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 15 is added to a number, the result is equal to three times the number. Find the number.",
          "option": ["5", "6", "7", "8"],
          "answer": ["7.5"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 74,
          "questionHindi": "यदि दो संख्याओं का अंतर 18 है और उनका अनुपात 4:7 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the difference between two numbers is 18 and their ratio is 4:7, then find the larger number.",
          "option": ["28", "35", "42", "49"],
          "answer": ["42"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 75,
          "questionHindi": "यदि 12x + 7 = 3x - 8 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 12x + 7 = 3x - 8, then what is the value of x.",
          "option": ["-5/3", "-5/2", "-3/2", "-1"],
          "answer": ["-5/3"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 76,
          "questionHindi": "यदि 8(x - 1) = 3(x + 2), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 8(x - 1) = 3(x + 2), then what is the value of x.",
          "option": ["3.8", "4.2", "4.6", "5"],
          "answer": ["3.8"],
          "topic": "algebra",
          "subtopic": "linear equations"
      }, {
          "id": 77,
          "questionHindi": "यदि 1/x + 1/8 = 1/5, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 1/x + 1/8 = 1/5, then what is the value of x.",
          "option": ["18.67", "19.67", "20.67", "21.67"],
          "answer": ["21.33"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 78,
          "questionHindi": "यदि 5x/6 - 1/3 = 1/2, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 5x/6 - 1/3 = 1/2, then what is the value of x.",
          "option": ["1/2", "2/3", "3/4", "1"],
          "answer": ["2/3"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 79,
          "questionHindi": "यदि किसी संख्या का 20% 40 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 20% of a number is 40, then what is the number.",
          "option": ["100", "150", "200", "250"],
          "answer": ["200"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 80,
          "questionHindi": "यदि किसी संख्या में से 15% घटाने पर परिणाम 85 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 15% of a number is subtracted from the number, the result is 85. Find the number.",
          "option": ["85", "100", "115", "120"],
          "answer": ["100"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 81,
          "questionHindi": "यदि दो संख्याओं का अनुपात 4:9 है और उनका योग 65 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the ratio of two numbers is 4:9 and their sum is 65, then find the larger number.",
          "option": ["27", "36", "45", "54"],
          "answer": ["45"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 82,
          "questionHindi": "यदि किसी आयत की लंबाई उसकी चौड़ाई से 8 सेमी अधिक है और उसका परिमाप 56 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 8 cm more than its width and its perimeter is 56 cm, find the width.",
          "option": ["9 cm", "10 cm", "11 cm", "12 cm"],
          "answer": ["10 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 83,
          "questionHindi": "यदि किसी संख्या का 2/7 भाग 18 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 2/7 of a number is 18, find the number.",
          "option": ["42", "49", "56", "63"],
          "answer": ["63"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 84,
          "questionHindi": "यदि किसी संख्या में 24 जोड़ने पर परिणाम उस संख्या के तीन गुने के बराबर होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 24 is added to a number, the result is equal to three times the number. Find the number.",
          "option": ["8", "9", "10", "11"],
          "answer": ["12"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 85,
          "questionHindi": "यदि दो संख्याओं का अंतर 24 है और उनका अनुपात 3:7 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the difference between two numbers is 24 and their ratio is 3:7, then find the larger number.",
          "option": ["36", "42", "48", "56"],
          "answer": ["42"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 86,
          "questionHindi": "यदि 13x + 5 = 2x - 12 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 13x + 5 = 2x - 12, then what is the value of x.",
          "option": ["-5/11", "-4/11", "-3/11", "-2/11"],
          "answer": ["-17/11"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 87,
          "questionHindi": "यदि 9(x - 1) = 4(x + 2), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 9(x - 1) = 4(x + 2), then what is the value of x.",
          "option": ["2.2", "2.6", "3", "3.4"],
          "answer": ["3.4"], 
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 88,
          "questionHindi": "यदि 1/x + 1/9 = 1/6, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 1/x + 1/9 = 1/6, then what is the value of x.",
          "option": ["15", "18", "21", "24"],
          "answer": ["18"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 89,
          "questionHindi": "यदि 4x/7 - 1/3 = 1/21, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 4x/7 - 1/3 = 1/21, then what is the value of x.",
          "option": ["1/2", "2/3", "3/4", "1"],
          "answer": ["1/2"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 90,
          "questionHindi": "यदि किसी संख्या का 14% 28 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 14% of a number is 28, then what is the number.",
          "option": ["150", "200", "250", "300"],
          "answer": ["200"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },    {
          "id": 91,
          "questionHindi": "यदि किसी संख्या में से 8% घटाने पर परिणाम 92 प्राप्त होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 8% of a number is subtracted from the number, the result is 92. Find the number.",
          "option": ["90", "100", "110", "120"],
          "answer": ["100"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 92,
          "questionHindi": "यदि दो संख्याओं का अनुपात 6:11 है और उनका योग 85 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the ratio of two numbers is 6:11 and their sum is 85, then find the larger number.",
          "option": ["44", "55", "66", "77"],
          "answer": ["55"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 93,
          "questionHindi": "यदि किसी आयत की लंबाई उसकी चौड़ाई से 10 सेमी अधिक है और उसका परिमाप 60 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
          "questionEnglish": "If the length of a rectangle is 10 cm more than its width and its perimeter is 60 cm, find the width.",
          "option": ["10 cm", "11 cm", "12 cm", "13 cm"],
          "answer": ["10 cm"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 94,
          "questionHindi": "यदि किसी संख्या का 3/8 भाग 24 है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 3/8 of a number is 24, find the number.",
          "option": ["48", "56", "64", "72"],
          "answer": ["64"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 95,
          "questionHindi": "यदि किसी संख्या में 30 जोड़ने पर परिणाम उस संख्या के चार गुने के बराबर होता है, तो वह संख्या ज्ञात कीजिए।",
          "questionEnglish": "If 30 is added to a number, the result is equal to four times the number. Find the number.",
          "option": ["8", "9", "10", "11"],
          "answer": ["10"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 96,
          "questionHindi": "यदि दो संख्याओं का अंतर 25 है और उनका अनुपात 2:7 है, तो बड़ी संख्या ज्ञात कीजिए।",
          "questionEnglish": "If the difference between two numbers is 25 and their ratio is 2:7, then find the larger number.",
          "option": ["35", "42", "49", "56"],
          "answer": ["35"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 97,
          "questionHindi": "यदि 15x + 8 = 2x - 7 है, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 15x + 8 = 2x - 7, then what is the value of x.",
          "option": ["-5/13", "-4/13", "-3/13", "-2/13"],
          "answer": ["-15/13"], 
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 98,
          "questionHindi": "यदि 7(x - 3) = 5(x + 1), तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 7(x - 3) = 5(x + 1), then what is the value of x.",
          "option": ["11", "12", "13", "14"],
          "answer": ["11"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 99,
          "questionHindi": "यदि 1/x + 1/10 = 1/6, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 1/x + 1/10 = 1/6, then what is the value of x.",
          "option": ["12", "15", "18", "21"],
          "answer": ["15"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
      {
          "id": 100,
          "questionHindi": "यदि 6x/7 - 1/4 = 1/14, तो x का मान ज्ञात कीजिए।",
          "questionEnglish": "If 6x/7 - 1/4 = 1/14, then what is the value of x.",
          "option": ["1/2", "2/3", "3/4", "1"],
          "answer": ["1/2"],
          "topic": "algebra",
          "subtopic": "linear equations"
      },
  ]

  export default qustionsArr;