---
permalink: /git_push
---

# Git push 

## リモートにコミットを送信する

`git push` はリモートにコミットを送信するためのコマンドです。
引数にリモート名とブランチ名を取ります。

```bash
$ git push {REMOTE_NAME} {REFSPEC}
```

通常は `git push origin master` の様に利用するケースが多いですが、
対象のリモートや作業しているブランチによって引数の値は若干異なります。

`git push origin master` は、`origin` リモートの `master` ブランチに、
手元の `master` ブランチの内容をpushする、という意味になります。

対して、`git push origin dev` は、`origin` リモートの `dev` ブランチに、
手元の `dev` ブランチの内容をpushする、という意味になります。

手元のブランチ名とリモートのブランチ名が異なる場合のpushは `:` を用いて制御します。

例えば `git push origin dev:master` は、`origin` リモートの `master` ブランチに、
手元の `dev` ブランチの内容をpushする、という意味になります。
