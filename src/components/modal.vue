<template>
  <div v-if="visible" class="modal">
    <div class="modal-content">
      <div class="modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-4 shadow">
            <div class="modal-header border-bottom-0">
              <h1 class="modal-title fs-5">Title <br> {{ item.title }}</h1>
              <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
            </div>
            <div class="modal-body py-0">
              <p>contents <br> {{ item.contents }}</p>
              <small>name : {{ item.name }}</small>
            </div>
            <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
              <button type="button" class="btn btn-lg btn-primary">Save changes</button>
              <button type="button" class="btn btn-lg btn-secondary" @click="close">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    visible: Boolean
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-dialog {
  margin: 5% auto;
  max-width: 800px; /* 너비를 800px로 설정 */
}

.modal-content {
  width: 90%; /* 전체 너비의 90%를 차지하도록 설정 */
  max-width: 800px; /* 최대 너비를 800px로 제한 */
  padding: 40px; /* 내부 여백 */
  margin: 10% auto; /* 상하 여백을 10%로 설정하고 좌우 중앙 정렬 */
  background-color: #ffffff; /* 배경 색상 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
}

.btn-close {
  border: none;
  background: none;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.modal-title {
  font-size: 24px; /* 타이틀 폰트 크기 조정 */
  color: #333;
}

.modal-body {
  margin-top: 20px;
  font-size: 16px; /* 본문 폰트 크기 조정 */
  color: #666;
  line-height: 1.5;
}

.modal-footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 12px 24px; /* 버튼 패딩 조정 */
  font-size: 18px; /* 버튼 폰트 크기 조정 */
}
</style>