(function monkeyPatcher() {
    let commands = {
        upvote: post => post.upvotes += 1,
        downvote: post => post.downvotes += 1,
        score: post => {
            let upvotes = post.upvotes;
            let downvotes = post.downvotes;

            let result = [];

            let totalScore = upvotes - downvotes;

            let totalVotes = upvotes + downvotes;

            let reportedUpvotes = upvotes;
            let reportedDownvotes = downvotes;

            let greaterNumber = Math.max(reportedUpvotes, reportedDownvotes);

            if(totalVotes > 50) {
                reportedUpvotes += Math.ceil(greaterNumber * 0.25);
                reportedDownvotes += Math.ceil(greaterNumber * 0.25);
            }

            let balance = reportedUpvotes - reportedDownvotes;

            let rating = getRating(upvotes, downvotes, totalVotes);

            result.push(reportedUpvotes);
            result.push(reportedDownvotes);
            result.push(balance);
            result.push(rating);

            return result;
        },
        call: (post, args) => {
            return commands[args](post)
        }
    };

    return commands;

    function getRating(upvotes, downvotes, totalVotes) {
        let upvotesPercentage = upvotes / totalVotes * 100;
        let balance = upvotes - downvotes;

        if(totalVotes < 10) return "new";
        if(upvotesPercentage > 66) return "hot";
        if(balance < 0) return "unpopular";
        if(upvotes > 100 || downvotes > 100) return "controversial";
        return "new";
    }
}());