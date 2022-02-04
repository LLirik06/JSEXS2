// Case1
// let day = prompt('Enter num 1-7')
// switch(day){
//     case'1':
//         alert('Monday')
//         break;
//     case'2':
//         alert('Tueday')
//         break;
//     case'3':
//         alert('Wednesday')
//         break;
//     case'4':
//         alert('Thursday')
//         break;
//     case'5':
//         alert('Friday')
//         break;
//     case'6':
//         alert('Saturday')
//         break;
//     case'7':
//         alert('Sunday')
//         break;
//     default:
//         alert('erore')
//         break;
// }


// Case 2
// let K = prompt('Enter num 1-5')
//  switch(K){
//      case'1':
//         alert('Very bad')
//         break;
//      case'2':
//         alert('Bad')
//         break;
//      case'3':
//         alert('Normal')
//         break;
//      case'4':
//         alert('Good')
//         break;
//      case'5':
//         alert('Exelent')
//         break;
//     default:
//         alert('erore')
//         break;
// }


// Case 3
// let month = prompt('Enter num 1-12')
// switch(month){
//     case('1'):
//         alert("winter")
//         break;
//     case('2'):
//         alert("winter")
//         break;
//     case('12'):
//         alert("winter")
//         break;
//     case'3':
//         alert("spring")
//         break;
//     case'4':
//         alert("spring")
//         break;
//     case'5':
//         alert("spring")
//         break;
//     case'6':
//         alert("summer")
//         break;
//     case'7':
//         alert("summer")
//         break;
//     case'8':
//         alert("summer")
//         break;
//     case'9':
//         alert("fall")
//         break;
//     case'10':
//         alert("fall")
//         break;
//     case'11':
//         alert("fall")
//         break;
//     default:
//         alert('erore')
//         break;
// }


// Case 4
// let month = prompt('Enter num 1-12')
// switch(month){
//     case('1'):
//         alert("31")
//         break;
//     case('2'):
//         alert("28")
//         break;
//     case('12'):
//         alert("31")
//         break;
//     case'3':
//         alert("31")
//         break;
//     case'4':
//         alert("30")
//         break;
//     case'5':
//         alert("31")
//         break;
//     case'6':
//         alert("30")
//         break;
//     case'7':
//         alert("31")
//         break;
//     case'8':
//         alert("31")
//         break;
//     case'9':
//         alert("30")
//         break;
//     case'10':
//         alert("31")
//         break;
//     case'11':
//         alert("30")
//         break;
//     default:
//         alert('erore')
//         break;
// }


// Case 5
// let a = +prompt('enter num a')
// let b = +prompt('enter num b (b > 0)')
// let act = prompt('choose act 1-sum, 2-razn, 3-proizv, 4-chast')
// switch(act){
//     case('1'):
//         alert(a + b)
//         break;
//     case('2'):
//         alert(a - b)
//         break;
//     case('3'):
//         alert(a * b)
//         break;
//     case('4'):
//         alert(a / b)
//         break;
//     default:
//         alert('eror')
// }


// Case 6
// let l = +prompt('enter length')
// let metr = prompt('choose 1-dm, 2-km, 3-m, 4-mm, 5-cm')
// switch(metr){
//     case('1'):
//         alert("length in m is " + (l * (10 ** -1)))
//         break;
//     case('2'):
//         alert("length in m is " + (l * (10 ** 3)))
//         break;
//     case('3'):
//         alert("length in m is " + l)
//         break;
//     case('4'):
//         alert("length in m is " + (l * (10 ** -3)))
//         break;
//     case('5'):
//         alert("length in m is " + (l * (10 ** -2)))
//         break;
//     default:
//         alert('erore')
//         break;
// }


// Case 7
// let l = +prompt('enter massa')
// let kilog = prompt('choose 1-kg, 2-mg, 3-g, 4-T, 5-C')
// switch(kilog){
//     case('1'):
//         alert("massa in kg is " + l)
//         break;
//     case('2'):
//         alert("massa in kg is " + (l * (10 ** -5)))
//         break;
//     case('3'):
//         alert("massa in kg is " + (l * (10 ** -3)))
//         break;
//     case('4'):
//         alert("massa in kg is " + (l * (10 ** 3)))
//         break;
//     case('5'):
//         alert("massa in kg is " + (l * (10 ** 2)))
//         break;
//     default:
//         alert('erore')
//         break;
// }


// Case 8
// let D = +prompt('enter day')
// let M = prompt('enter mounth 1-12')
// switch(D){
//     case(1, 1):
//         alert('31.12')
//         break;
//     case(1, 2):
//         alert('31.01')
//         break;
//     case(1, 3):
//         alert('28.02')
//         break;
//     case(1, 4):
//         alert('31.03')
//         break;
//     case(1, 5):
//         alert('30.04')
//         break;
//     case(1, 6):
//         alert('31.05')
//         break;
//     case(1, 7):
//         alert('30.06')
//         break;
//     case(1, 8):
//         alert('31.07')
//         break;
//     case(1, 9):
//         alert('31.08')
//         break;
//     case(1, 10):
//         alert('30.09')
//         break;
//     case(1, 11):
//         alert('31.10')
//         break;
//     case(1, 12):
//         alert('30.11')
//         break;
//     default:
//         alert((D - 1) +'. ' + M)
//         break;
// }


// case 9
// let D = +prompt('enter day')
// let M = prompt('enter mounth 1-12')
// switch(D){
//     case(31, 1):
//         alert('1.02')
//         break;
//     case(28, 2):
//         alert('1.03')
//         break;
//     case(31, 3):
//         alert('01.04')
//         break;
//     case(30, 4):
//         alert('01.05')
//         break;
//     case(31, 5):
//         alert('01.06')
//         break;
//     case(30, 6):
//         alert('01.07')
//         break;
//     case(31, 7):
//         alert('01.08')
//         break;
//     case(31, 8):
//         alert('01.09')
//         break;
//     case(30, 9):
//         alert('01.10')
//         break;
//     case(31, 10):
//         alert('01.11')
//         break;
//     case(30, 11):
//         alert('01.12')
//         break;
//     case(31, 12):
//         alert('1.01')
//         break;
//     default:
//         alert((D + 1) +'. ' + M)
//         break;
// }


// Case 10
// let C = prompt('enter name n - north, w- west, s - south, e -east')
// let N = prompt('enter act 0 - nothing, 1 - turn left, -1 - turn right')
// switch(C){
//      case "n":
//          switch(N){
//              case 0:
//                 C = "North";
//                  break;
//              case 1:
//                 C = "West";
//                 break;
//             case -1:
//                 C = "East";
//                  break;
//          }
//          break;
//      case "w":
//          switch(N){
//              case 0:
//                  C = "West";
//                  break; 
//              case 1:
//                  C = "South";
//                  break;
//              case -1:
//                  C = "North";
//                  break;
//          }
//          break;     
//     case "s":
//          switch(N){
//              case 0:
//                  C = "South";
//                  break;
//              case 1:                 
//                 C = "East";
//                  break;
//              case -1:
//                 C = "West";
//                  break;
//          }
//          break;
//      case "e":
//          switch(N){
//              case 0:
//                 C = "East";
//                  break;
//              case 1:
//                 C = "North";
//                  break;
//              case -1:
//                 C = "South";
//                  break;
//          }
//          break;
//  }
//  alert(C);


// Case 11
// let C = prompt('enter name n - north, w- west, s - south, e -east')
// let N1 = prompt('enter act 1 - turn left, -1 - turn right 2 - turn on 180deg')
// let N1 = prompt('enter act 1 - turn left, -1 - turn right 2 - turn on 180deg')
// switch(C){
//     case "n":
//         switch(N1+N2){
//             case -1:
//                 C = "East";
//                 break;
//             case 1:
//                 C = "West";
//                 break;
//             case 2:
//                 C = "South";
//                 break;
//         }
//         break;
//     case "w":
//         switch(N1+N2){
//             case -1:
//                 C = "North";
//                 break;
//             case 1:
//                 C = "South";
//                 break;
//             case 2:
//                 C = "East";
//                 break;
//         }
//         break;
//     case "s":
//         switch(N1+N2){
//             case -1:
//                 C = "West";
//                 break;
//             case 1:
//                 C = "East";
//                  break;
//              case 2:
//                 C = "North";
//                  break;
//          }
//          break;
//      case "e":
//          switch(n1+n2){
//              case -1:
//                  C = "South";
//                  break;
//              case 1:
//                 C = "North";
//                  break;
//              case 2:
//                 C = "West";
//                  break;
//          }
//          break;
// }
//  alert(C);


// Case 12
// let Num = +prompt("choose 1- R, 2- D, 3- L, 4- S")
// let n = +prompt('it is')
// let r
// let d
// let l 
// let s 
// switch(Num){
//     case 1:
//         r = n;
//         d = 2 * r;
//         l = (2 * 3.14) * r;
//         s = 3.14 * (r ** 2);
//         break;
//     case 2:
//         r = n / 2;
//         d = n;
//         l = (2 * 3.14) * r;
//         s = 3.14 * (r ** 2);
//         break;
//     case 3:
//         r = l / (2 * 3.14);
//         d = 2 * r;
//         l = n;
//         s = 3.14 * (r ** 2);
//         break;
//     case 4:
//         r = (n / 3.14) ** 0.5;
//         d = 2 * r;
//         l = (2 * 3.14) * r;
//         s = n;
// }
// alert('R = ' + r, 'D = ' + d, 'L = ' + l, 'S = ' + s)