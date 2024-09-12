import React from "react";

export default function HangmanDraw(){
    return(
        <div class="hangman-draw">
        <div class="the-draw">
          <div class="the-stand"></div>
          <div class="the-hang"></div>
          <div class="the-rope"></div>
          <div class="the-man">
            <div class="head"></div>
            <div class="body"></div>
            <div class="hands"></div>
            <div class="legs"></div>
          </div>
        </div>
      </div>
    );
};