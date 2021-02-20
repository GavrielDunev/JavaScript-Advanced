class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0].username} likes this story!`;
        }

        return `${this._likes[0].username} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.find(p => p.username == username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push({ username });
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        let found = this._likes.find(p => p.username == username);
        if (!found) {
            throw new Error("You can't dislike this story!");
        }

        let index = this._likes.findIndex(p => p.username == username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        let found = this._comments.find(c => c.Id == id);
        if (id == undefined || found == undefined) {

            let index;
            if (this._comments.length == 0) {
                index = 1;
            } else {
                index = this._comments.length + 1;
            }

            let newComment = { Id: index, Username: username, Content: content, Replies: [] };
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        }

        if (found) {
            let index = '';
            if (found.Replies.length == 0) {
                index = found.Id + '.1';
            } else {
                index = found.Id + '.' + (found.Replies.length + 1);
            }

            let reply = { Id: index, Username: username, Content: content };
            found.Replies.push(reply);

            return "You replied successfully";
        }

    }

    toString(sortingType) {
        let result = [];

        if (sortingType == 'desc') {
            this._comments.sort((c1, c2) => c2.Id - c1.Id);
            this._comments.forEach(c => c.Replies.sort((r1, r2) => Number(r2.Id) - Number(r1.Id)));
        } else if (sortingType == 'username') {
            this._comments.sort((c1, c2) => c1.Username.localeCompare(c2.Username));
            this._comments.forEach(c =>c.Replies.sort((r1, r2) => r1.Username.localeCompare(r2.Username)));
        }

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);
        
        for (let com of this._comments) {
            result.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`);
            if (com.Replies.length > 0) {
                for (let rep of com.Replies) {
                    result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`);
                } 
            }
        }
        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
