// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const body = document.querySelector("body")

const getMeme = (number) => (
    {
        0: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*XLLj5L4_AdFhCRVw",
        1: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*6IyUv_7X856v05cR",
        2: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*X0qUYmAuQjTy2wni",
        3: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*F-rMIkdywVWyB5a6.png",
        4: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*rGFvFcF4EqGRUxDA.jpg",
        5: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*-08EUzwn1On4yKx1.png",
        6: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*ZtK2M41W6a3Avzbk.png",
        7: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*y34Qo6EF0s2sNm7l",
        8: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*HGdHJ_sLWK7IlGrw",
        9: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*pEbplfcyPZ2CpgnR.jpg",
        10: "https://miro.medium.com/v2/resize:fit:786/format:webp/0*gUmnBbPXyTNTL8hI",
    }[number]
)

const randInt = () => Math.round(Math.random() * 10)
const img = document.createElement('img')
img.src = getMeme(randInt())
body.appendChild(img)
