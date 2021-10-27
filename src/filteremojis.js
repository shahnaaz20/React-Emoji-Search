// def commonCharacterCount(s1, s2):
//     if len(s1)>len(s2):
//         string1 = list(s1)
//         string2 = list(s2)
//     else:
//         string1 = list(s2)
//         string2 = list(s1)
//     count = 0
//     for i in string1:
//         for j in string2:
//             if i == j:
//                 # print(i,"--",j)
//                 string1.remove(i)
//                 string2.remove(j)
//                 count += 1
//     return(count)

// print(commonCharacterCount("abca","xyzbac"))

function commonCharacterCount(s1, s2) {
  var string1 = s1.split("")
  var string2 = s2.split("")
  // console.log(string1, string2)
  var count = 0
  for (var i = 0; i < string1.length; i++) {
    if (string2.includes(string1[i])) {
      console.log(string1[i],string2)
      var index = string2.indexOf(string1[i]);
      string2.splice(index, 1)
      count += 1

    }
  } return count

}
console.log(commonCharacterCount("aabcc", "adcaa"))