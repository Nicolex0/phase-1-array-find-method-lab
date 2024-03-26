const superbowls = [
    { year: 2020, result: "L" },
    { year: 2021, result: "W" },
    { year: 2022, result: "L" },
    { year: 2023, result: "W" }
];

function superbowlWin(superbowls) {
    const win = superbowls.find(superbowl => superbowl.result === "W");
    return win ? win.year : undefined;
}
