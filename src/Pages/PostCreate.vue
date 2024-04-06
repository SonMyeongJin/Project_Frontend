<template>
  <main>
    <div class="py-5 text-center">
      <h2>게시글 작성</h2>
      <p class="lead">거래 분쟁시 책임 안짐</p>
    </div>

    <div class="row g-5">
      <div class="col-md-7 mx-auto">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">게시글 작성</h4>
            <form @submit.prevent="submitPost">

              <div class="mb-3">
                <label for="postTitle" class="form-label">제목</label>
                <input type="text" class="form-control" id="postTitle" v-model="post.title" required>
              </div>

              <div class="mb-3">
                <label for="authorName" class="form-label">작성자 이름</label>
                <input type="text" class="form-control" id="authorName" v-model="post.name">
              </div>

              <div class="mb-3">
                <label for="postContent" class="form-label">내용</label>
                <textarea class="form-control" id="postContent" rows="4" v-model="post.contents" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary"> 등록 [submit] </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: {
        title: '',
        name: '',
        contents: '',
      }
    };
  },
  methods: {
    submitPost() {
      axios.post("/api/post", this.post).then(() => {
        window.alert("게시글이 작성되었습니다.");
      }).catch(() => {
        window.alert("게시글 작성 실패");
      });
      console.log('게시된 포스트:', this.post);
    }
  }
}
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}

.row.g-5 {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
</style>