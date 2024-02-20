
const dataDB = [
    {
        from: "2023-05-30T00:00:00.000",
        to: "2023-05-30T05:56:28.000",
    },
    {
        from: "2023-05-30T05:56:28.000",
        to: "2023-05-30T05:57:10.000",
    },
    {
        from: "2023-05-30T05:57:01.000",
        to: "2023-05-30T05:58:31.000",
    },
    {
        from: "2023-05-30T05:58:31.800",
        to: "2023-05-30T07:54:21.000",
    },
    {
        from: "2023-05-30T07:04:21.000",
        to: "2023-05-30T07:05:26.000",
    },
    {
        from: "2023-05-30T07:05:26.800",
        to: "2023-05-30T08:27:42.000",
    },
    {
        from: "2023-05-30T08:27:42.000",
        to: "2023-05-30T08:28:52.000",
    },
    {
        from: "2023-05-30T08:29:43.000",
        to: "2023-05-30T08:31:28.000",
    },
    {
        from: "2023-05-30T08:31:28.000",
        to: "2023-05-30T10:19:15.000",
    },
    {
        from: "2023-05-30T10:19:15.000",
        to: "2023-05-30T10:21:02.000",
    },
    {
        from: "2023-05-30T10:21:02.000",
        to: "2023-05-30T16:50:26.000",
    },
    {
        from: "2023-05-30T16:50:26.000",
        to: "2023-05-30T16:50:49.000",
    },
];

function getMinut({ from, to }) {
    const t = Date.parse(to) - Date.parse(from);
    return Math.floor((t / 1000 / 60) % 60);
}


function combineMinutes(data) {
    data.push(data.reduce((prev, curr) => {
        if (getMinut(curr) > 5) {
            prev.push(curr);
        }
        return prev;
    }, []));

    return data
}

const result = combineMinutes(dataDB);


function getOnlyArrayOfResult(data) {
    return data.filter(item => {
        if (Array.isArray(item)) {
            return item
        }
    })[0]
}

getOnlyArrayOfResult(result);


// function createSubArrObjectsMore5Mins(arr) {
//     return [
//         ...arr,
//         arr.reduce((acc, curr) => {
//             if (Date.parse(curr.to) - Date.parse(curr.from) > 300000) {
//                 acc.push(curr);
//             }
//             return acc;
//         }, []),
//     ];
//  }
