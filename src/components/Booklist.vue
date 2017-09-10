<template>
<div>
<div class="section">
    <book-list :books="latestUpdated" heading="最新更新">
    </book-list>
  </div>
   <div class="section">
    <book-list :books="recommended" heading="编辑推荐">
    </book-list>
  </div>
  </div>
  </template>
  