document.getElementById("readme").innerHTML=`
<h1 class="uk-heading-medium uk-text-center" style="background: aliceblue;padding-bottom: 15px;">
  <span style="font-family: 'Cinzel', serif;position: relative; z-index: 1;color: gold;">Vaishnava</span>
  <span style="font-family: 'Indie Flower', cursive;position: relative; left: -71px; top: 23px; color: lightpink;">Songs</span>
</h1>
The purpose of this site is to index vaishnava songs and provide a means for the public to correct and consume the content.
Click any of the song titles from the left side to open a song.

<br><br><span class="uk-text-bold">Making chnages:</span><br>
To do any editing, one must have a <a href='https://github.com' target="_blank">GitHub</a> account.
Clicking this button <a class="uk-button uk-button-default uk-button-danger" uk-icon="pencil" href="https://github.com/vaishnava-songs/collection/edit/master/README.js" target="_blank"></a> will open the edit page for the this page on <a href='https://github.com' target="_blank">GitHub</a>.
When one clicks the edit button for the first time, Github will prompt one to fork the repository. 
After forking the repository, one will be able to make edits. 
When viewing a song, look for the same button in the top right corner to edit that song.
Once one edits the song a "pull request" will be made.
The maintainers will review the changes and make comments or merge in the change.

<br><br><span class="uk-text-bold">Transliteration Standard Used:</span><br>
<table class="uk-table uk-table-small uk-table-divider">
    <thead>
        <tr>
            <th class="uk-table-shrink">Bengali</th>
            <th class="uk-table-shrink">Roman</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="uk-text-center">অ</td>
            <td class="uk-text-center">a / o</td>
            <td>Most of the time takes the 'o' form</td>
        </tr>
        <tr>
            <td class="uk-text-center">ক</td>
            <td class="uk-text-center">ka</td>
            <td></td>
        </tr>
        <tr>
            <td class="uk-text-center">য়</td>
            <td class="uk-text-center">ẏa</td>
            <td>When it is the first letter it is pronounced as a 'j'</td>
        </tr>
    </tbody>
</table>

<br><br><span class="uk-text-bold">Delevoping:</span><br>
The site and all the content including the songs etc is hosted on the <a href="https://getuikit.com/docs" target="_blank">Vaishnava Songs GitHub</a> repo.
Any helper scripts can also be found there.
The UI elements are provided by UIKit and documentation can be found on the <a href="https://getuikit.com/docs" target="_blank">UIKit docs site</a>.
`
