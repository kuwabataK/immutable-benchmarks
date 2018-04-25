Benchmark of Javascript Immutability Libraries
==============================================

This repo contains benchmarks that compare performance of a set of javascript immutability libraries.  
Currently included libraries:
- [Immutable.js](https://facebook.github.io/immutable-js/)
- [Mori.js](http://swannodette.github.io/mori/)
- [Seamless-Immutable](https://github.com/rtfeldman/seamless-immutable)
- [Crio](https://github.com/planttheidea/crio)
- [Immer](https://github.com/mweststrate/immer)

## Running locally

1. Clone this repository
2. Execute `npm install`
3. Execute `npm start`
4. Results will be saved to `results.csv` file.

## Results

Below you can find charts of the results after 5000000 cycles executed on a MacBook Pro with i7@2.3GHz, 16GB RAM@1600MHz and Node.js v6.2.2.

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [get] Object Native                  | 0    | 0    | 0     | 1     | 0      | 1      | 0       | 3       | 
| [get] Object Seamless-immutable      | 0    | 0    | 0     | 1     | 5      | 6      | 8       | 28      | 
| [get] Object Immutable.js            | 2    | 1    | 1     | 8     | 2      | 8      | 24      | 33      | 
| [get] Object Mori.js                 | 2    | 3    | 4     | 10    | 15     | 28     | 41      | 135     | 
| [get] Object Crio                    | 0    | 0    | 0     | 1     | 1      | 2      | 5       | 25      | 
| [get] Object Immer                   | 1    | 0    | 1     | 1     | 0      | 0      | 1       | 3       | 

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [get] Array Native                   | 0    | 0    | 2     | 2     | 1      | 5      | 9       | 46      | 
| [get] Array Seamless-immutable.js    | 0    | 1    | 0     | 3     | 2      | 8      | 16      | 68      | 
| [get] Array Immutable.js             | 1    | 1    | 2     | 3     | 2      | 8      | 15      | 73      | 
| [get] Array Mori.js                  | 1    | 5    | 4     | 6     | 17     | 30     | 45      | 201     | 
| [get] Array Crio                     | 1    | 0    | 0     | 3     | 1      | 6      | 13      | 65      | 
| [get] Array Immer                    | 0    | 0    | 1     | 1     | 1      | 5      | 10      | 48      | 

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [get-in] Object Native               | 0    | 1    | 0     | 2     | 0      | 0      | 0       | 3       | 
| [get-in] Object Seamless-immutable   | 1    | 0    | 0     | 1     | 5      | 4      | 9       | 44      | 
| [get-in] Object Immutable.js         | 1    | 3    | 2     | 11    | 9      | 44     | 76      | 344     | 
| [get-in] Object Mori.js              | 1    | 6    | 8     | 26    | 42     | 118    | 220     | 1032    | 
| [get-in] Object Crio                 | 1    | 1    | 0     | 1     | 6      | 4      | 7       | 41      | 
| [get-in] Object Immer                | 0    | 0    | 0     | 2     | 0      | 1      | 0       | 3       | 

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [get-in] Array Native                | 0    | 1    | 2     | 1     | 1      | 6      | 11      | 52      | 
| [get-in] Array Seamless-immutable.js | 1    | 1    | 2     | 3     | 2      | 9      | 20      | 87      | 
| [get-in] Array Immutable.js          | 1    | 8    | 5     | 6     | 12     | 45     | 92      | 439     | 
| [get-in] Array Mori.js               | 2    | 6    | 10    | 18    | 26     | 71     | 122     | 1100    | 
| [get-in] Array Crio                  | 0    | 0    | 1     | 6     | 2      | 9      | 17      | 86      | 
| [get-in] Array Immer                 | 0    | 1    | 1     | 2     | 1      | 5      | 11      | 50      | 

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [set] Object Native                  | 0    | 2    | 4     | 14    | 27     | 129    | 262     | 1289    | 
| [set] Object Seamless-immutable      | 4    | 18   | 35    | 157   | 313    | 1439   | 2900    | 13654   | 
| [set] Object Immutable.js            | 1    | 4    | 4     | 8     | 10     | 48     | 89      | 378     | 
| [set] Object Mori.js                 | 1    | 3    | 5     | 10    | 17     | 52     | 82      | 351     | 
| [set] Object Crio                    | 6    | 26   | 33    | 113   | 227    | 1225   | 2405    | 11658   | 
| [set] Object Immer                   | 4    | 22   | 36    | 189   | 385    | 1920   | 3793    | 20587   | 

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [set] Array Native                   | 0    | 2    | 3     | 7     | 13     | 66     | 140     | 675     | 
| [set] Array Seamless-immutable.js    | 8    | 31   | 70    | 262   | 561    | 2977   | 5775    | 26573   | 
| [set] Array Immutable.js             | 1    | 4    | 7     | 17    | 25     | 113    | 196     | 988     | 
| [set] Array Mori.js                  | 1    | 5    | 3     | 10    | 15     | 50     | 79      | 367     | 
| [set] Array Crio                     | 9    | 37   | 75    | 310   | 664    | 3005   | 6089    | 32117   | 
| [set] Array Immer                    | 5    | 16   | 19    | 66    | 131    | 642    | 1327    | 6602    | 

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [set-in] Object Native               | 1    | 5    | 7     | 26    | 52     | 267    | 509     | 2597    | 
| [set-in] Object Seamless-immutable   | 7    | 33   | 70    | 313   | 612    | 3011   | 6551    | 29118   | 
| [set-in] Object Immutable.js         | 2    | 7    | 8     | 24    | 33     | 141    | 287     | 1461    | 
| [set-in] Object Mori.js              | 3    | 8    | 13    | 39    | 55     | 298    | 605     | 1847    | 
| [set-in] Object Crio                 | 10   | 38   | 67    | 293   | 585    | 2813   | 5768    | 28692   | 
| [set-in] Object Immer                | 4    | 20   | 36    | 129   | 264    | 1306   | 2645    | 13422   | 

| Benchmark                            | 1000 | 5000 | 10000 | 50000 | 100000 | 500000 | 1000000 | 5000000 | 
|--------------------------------------|------|------|-------|-------|--------|--------|---------|---------| 
| [set-in] Array Native                | 1    | 4    | 5     | 13    | 26     | 126    | 247     | 1252    | 
| [set-in] Array Seamless-immutable.js | 13   | 69   | 112   | 505   | 1043   | 5636   | 10961   | 50876   | 
| [set-in] Array Immutable.js          | 3    | 10   | 14    | 33    | 59     | 288    | 825     | 3303    | 
| [set-in] Array Mori.js               | 3    | 9    | 15    | 20    | 46     | 273    | 571     | 3889    | 
| [set-in] Array Crio                  | 14   | 60   | 111   | 583   | 1193   | 6088   | 11420   | 55116   | 
| [set-in] Array Immer                 | 4    | 23   | 40    | 159   | 315    | 1573   | 3096    | 15793   | 

