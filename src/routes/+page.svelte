<script lang="ts">
  let babo = false
</script>

<div class="ab">
<div class="main">
<h1>이현경 {babo ? '바보' : '천재'}</h1>

<button on:click={() => babo = !babo}>
  {babo ? '천재' : '바보'} 버튼
</button>
</div>
</div>


<style>
  .ab {
    width: 100vw;
    height: 100vh;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 100px;
  }
  button {
    width: 500px;
    height: 300px;
    background-color: black;
    color: white;
    font-size: 100px;
  }
</style>