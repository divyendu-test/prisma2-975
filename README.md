# Chinook Dataset Example

> ⚠️ This dataset is not yet supported by [Prisma Studio](https://github.com/prisma/studio) (see [this GitHub issue](https://github.com/prisma/prisma2/issues/724) for more info).

## Description of the dataset

The Chinook dataset is the [default example used in the SQLite documentation](https://www.sqlitetutorial.net/sqlite-sample-database/).

## How to use

### 1. Clone GitHub repository

Get started by cloning the repo and navigating into this directory:

```
git clone git@github.com:prisma/prisma-datasets.git
cd prisma-datasets/datasets/sqlite/chinook
```

### 2. Run demo script

This folder contains a runnable demo script that you can execute as follows:

```
npm install
npm run dev 
```

Expand below to see what that console output looks like.

<details><summary>See console ouput</summary>
<br />

```json
[
  {
    "id": 1,
    "firstName": "Luís",
    "lastName": "Gonçalves",
    "company": "Embraer - Empresa Brasileira de Aeronáutica S.A.",
    "address": "Av. Brigadeiro Faria Lima, 2170",
    "city": "São José dos Campos",
    "state": "SP",
    "country": "Brazil",
    "postalCode": "12227-000",
    "phone": "+55 (12) 3923-5555",
    "fax": "+55 (12) 3923-5566",
    "email": "luisg@embraer.com.br",
    "invoices": [
      {
        "id": 98,
        "billingAddress": "Av. Brigadeiro Faria Lima, 2170",
        "billingCity": "São José dos Campos",
        "billingState": "SP",
        "billingCountry": "Brazil",
        "billingPostalCode": "12227-000",
        "total": 3.98,
        "invoiceItems": [
          {
            "id": 531,
            "unitPrice": 1.99,
            "quantity": 1,
            "track": {
              "id": 3247,
              "name": "Experiment In Terra",
              "composer": null,
              "milliseconds": 2923548,
              "bytes": 547982556,
              "unitPrice": 1.99
            }
          },
          {
            "id": 532,
            "unitPrice": 1.99,
            "quantity": 1,
            "track": {
              "id": 3248,
              "name": "Take the Celestra",
              "composer": null,
              "milliseconds": 2927677,
              "bytes": 512381289,
              "unitPrice": 1.99
            }
          }
        ]
      },
      {
        "id": 121,
        "billingAddress": "Av. Brigadeiro Faria Lima, 2170",
        "billingCity": "São José dos Campos",
        "billingState": "SP",
        "billingCountry": "Brazil",
        "billingPostalCode": "12227-000",
        "total": 3.96,
        "invoiceItems": [
          {
            "id": 649,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 447,
              "name": "Shout It Out Loud",
              "composer": "Paul Stanley, Gene Simmons, B. Ezrin",
              "milliseconds": 219742,
              "bytes": 7194424,
              "unitPrice": 0.99
            }
          },
          {
            "id": 650,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 449,
              "name": "Calling Dr. Love",
              "composer": "Gene Simmons",
              "milliseconds": 225332,
              "bytes": 7395034,
              "unitPrice": 0.99
            }
          },
          {
            "id": 651,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 451,
              "name": "Strutter",
              "composer": "Paul Stanley, Gene Simmons",
              "milliseconds": 192496,
              "bytes": 6317021,
              "unitPrice": 0.99
            }
          },
          {
            "id": 652,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 453,
              "name": "Cold Gin",
              "composer": "Ace Frehley",
              "milliseconds": 262243,
              "bytes": 8609783,
              "unitPrice": 0.99
            }
          }
        ]
      },
      {
        "id": 143,
        "billingAddress": "Av. Brigadeiro Faria Lima, 2170",
        "billingCity": "São José dos Campos",
        "billingState": "SP",
        "billingCountry": "Brazil",
        "billingPostalCode": "12227-000",
        "total": 5.94,
        "invoiceItems": [
          {
            "id": 767,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 1153,
              "name": "Think About You",
              "composer": null,
              "milliseconds": 231640,
              "bytes": 3860275,
              "unitPrice": 0.99
            }
          },
          {
            "id": 768,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 1157,
              "name": "Rocket Queen",
              "composer": null,
              "milliseconds": 375349,
              "bytes": 6185539,
              "unitPrice": 0.99
            }
          },
          {
            "id": 769,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 1161,
              "name": "Don't Cry (Original)",
              "composer": null,
              "milliseconds": 284744,
              "bytes": 4833259,
              "unitPrice": 0.99
            }
          },
          {
            "id": 770,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 1165,
              "name": "Back off Bitch",
              "composer": null,
              "milliseconds": 303436,
              "bytes": 5135662,
              "unitPrice": 0.99
            }
          },
          {
            "id": 771,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 1169,
              "name": "Garden of Eden",
              "composer": null,
              "milliseconds": 161539,
              "bytes": 2839694,
              "unitPrice": 0.99
            }
          },
          {
            "id": 772,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 1173,
              "name": "Coma",
              "composer": null,
              "milliseconds": 616511,
              "bytes": 10201342,
              "unitPrice": 0.99
            }
          }
        ]
      },
      {
        "id": 195,
        "billingAddress": "Av. Brigadeiro Faria Lima, 2170",
        "billingCity": "São José dos Campos",
        "billingState": "SP",
        "billingCountry": "Brazil",
        "billingPostalCode": "12227-000",
        "total": 0.99,
        "invoiceItems": [
          {
            "id": 1062,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2991,
              "name": "All Along The Watchtower",
              "composer": "Dylan, Bob",
              "milliseconds": 264568,
              "bytes": 8623572,
              "unitPrice": 0.99
            }
          }
        ]
      },
      {
        "id": 316,
        "billingAddress": "Av. Brigadeiro Faria Lima, 2170",
        "billingCity": "São José dos Campos",
        "billingState": "SP",
        "billingCountry": "Brazil",
        "billingPostalCode": "12227-000",
        "total": 1.98,
        "invoiceItems": [
          {
            "id": 1711,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 3436,
              "name": "Karelia Suite, Op.11: 2. Ballade (Tempo Di Menuetto)",
              "composer": "Jean Sibelius",
              "milliseconds": 406000,
              "bytes": 5908455,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1712,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 3438,
              "name": "Fantasia On Greensleeves",
              "composer": "Ralph Vaughan Williams",
              "milliseconds": 268066,
              "bytes": 4513190,
              "unitPrice": 0.99
            }
          }
        ]
      },
      {
        "id": 327,
        "billingAddress": "Av. Brigadeiro Faria Lima, 2170",
        "billingCity": "São José dos Campos",
        "billingState": "SP",
        "billingCountry": "Brazil",
        "billingPostalCode": "12227-000",
        "total": 13.86,
        "invoiceItems": [
          {
            "id": 1770,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 262,
              "name": "Interlude Zumbi",
              "composer": "Chico Science",
              "milliseconds": 71627,
              "bytes": 2408550,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1771,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 271,
              "name": "Rios Pontes & Overdrives",
              "composer": null,
              "milliseconds": 286720,
              "bytes": 9659152,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1772,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 280,
              "name": "Lixo Do Mangue",
              "composer": null,
              "milliseconds": 193253,
              "bytes": 6534200,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1773,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 289,
              "name": "Podes Crer",
              "composer": "Bino Farias/Da Gama/Lazão/Toni Garrido",
              "milliseconds": 232280,
              "bytes": 7747747,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1774,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 298,
              "name": "A Cor Do Sol",
              "composer": "Bernardo Vilhena/Da Gama/Lazão",
              "milliseconds": 231392,
              "bytes": 7663348,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1775,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 307,
              "name": "Doutor",
              "composer": "Bino/Da Gama/Toni Garrido",
              "milliseconds": 178155,
              "bytes": 5950952,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1776,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 316,
              "name": "Linha Do Equador",
              "composer": null,
              "milliseconds": 244715,
              "bytes": 8123466,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1777,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 325,
              "name": "TriboTchan",
              "composer": "Cal Adan/Paulo Levi",
              "milliseconds": 194194,
              "bytes": 6507950,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1778,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 334,
              "name": "Reggae Tchan",
              "composer": "Cal Adan/Del Rey, Tension/Edu Casanova",
              "milliseconds": 206654,
              "bytes": 6931328,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1779,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 343,
              "name": "Communication Breakdown(2)",
              "composer": "Jimmy Page/John Bonham/John Paul Jones",
              "milliseconds": 161149,
              "bytes": 5261022,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1780,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 352,
              "name": "Carolina Hard-Core Ecstasy",
              "composer": "Frank Zappa",
              "milliseconds": 359680,
              "bytes": 11731061,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1781,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 361,
              "name": "X-9 2001",
              "composer": null,
              "milliseconds": 273920,
              "bytes": 9310370,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1782,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 370,
              "name": "Ipiranga 2001",
              "composer": null,
              "milliseconds": 248293,
              "bytes": 8522591,
              "unitPrice": 0.99
            }
          },
          {
            "id": 1783,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 379,
              "name": "Água de Beber",
              "composer": "Antonio Carlos Jobim/Vinicius de Moraes",
              "milliseconds": 146677,
              "bytes": 4866476,
              "unitPrice": 0.99
            }
          }
        ]
      },
      {
        "id": 382,
        "billingAddress": "Av. Brigadeiro Faria Lima, 2170",
        "billingCity": "São José dos Campos",
        "billingState": "SP",
        "billingCountry": "Brazil",
        "billingPostalCode": "12227-000",
        "total": 8.91,
        "invoiceItems": [
          {
            "id": 2065,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2061,
              "name": "Vamo Batê Lata",
              "composer": "Herbert Vianna",
              "milliseconds": 228754,
              "bytes": 7585707,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2066,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2067,
              "name": "Mensagen De Amor (2000)",
              "composer": "Herbert Vianna",
              "milliseconds": 183588,
              "bytes": 6061324,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2067,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2073,
              "name": "Saber Amar",
              "composer": "Herbert Vianna",
              "milliseconds": 202788,
              "bytes": 6723733,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2068,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2079,
              "name": "Cinema Mudo",
              "composer": null,
              "milliseconds": 227918,
              "bytes": 7612168,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2069,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2085,
              "name": "Meu Erro",
              "composer": null,
              "milliseconds": 208431,
              "bytes": 6893533,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2070,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2091,
              "name": "Será Que Vai Chover?",
              "composer": null,
              "milliseconds": 337057,
              "bytes": 11133830,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2071,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2097,
              "name": "Mama, I'm Coming Home",
              "composer": "L. Kilmister, O. Osbourne & Z. Wylde",
              "milliseconds": 251586,
              "bytes": 4302390,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2072,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2103,
              "name": "Flying High Again",
              "composer": "O. Osbourne, R. Daisley, R. Rhoads, L. Kerslake",
              "milliseconds": 261224,
              "bytes": 8481822,
              "unitPrice": 0.99
            }
          },
          {
            "id": 2073,
            "unitPrice": 0.99,
            "quantity": 1,
            "track": {
              "id": 2109,
              "name": "Paranoid",
              "composer": "A. F. Iommi, W. Ward, T. Butler, J. Osbourne",
              "milliseconds": 176352,
              "bytes": 5729813,
              "unitPrice": 0.99
            }
          }
        ]
      }
    ]
  }
]
```

</details>
