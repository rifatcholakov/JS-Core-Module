function galacticElection(ballots) {
    let election = new Map();

    for (let ballot of ballots) {
        if (!election.has(ballot.system)) {
            election.set(ballot.system, new Map());
        }
        if (!election.get(ballot.system).has(ballot.candidate)) {
            election.get(ballot.system).set(ballot.candidate, 0);
        }
        let currentVotes = election.get(ballot.system).get(ballot.candidate);
        election.get(ballot.system).set(ballot.candidate, currentVotes + ballot.votes);
    }

    let result = new Map();
    [...election].map(([s, c]) =>
        [s, [...c].sort((a, b) =>
            b[1] - a[1]).reduce((a, b) =>
            [a[0], a[1] + b[1]])])
        .map(([s, [c, v]]) => [c, s, v])
        .forEach(([c, s, v], i, arr) => result.has(c) ? result.get(c).set(s, v) : result.set(c, new Map([[s, v]])));

    let ranking = [...result].map(([c, s]) =>
        [c, [...s].map(([s, v]) => v)
            .reduce((a, b) => a + b)])
        .sort(([c1, v1], [c2, v2]) => v2 - v1);

    let total = ranking.map(([c, v]) => v).reduce((a, b) => a + b);

    if (ranking[0][1] > total / 2) {
        console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
        if (ranking.length > 1) {
            let runnerup = ranking[1][0];
            console.log(`Runner up: ${runnerup}`);
            [...result.get(runnerup)].sort(([s1, v1], [s2, v2]) => v2 - v1).forEach(s => console.log(`${s[0]}: ${s[1]}`))
        } else {
            console.log(`${ranking[0][0]} wins unopposed!`);
        }
    } else {
        console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1] / total * 100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1] / total * 100)}%`);
    }
}