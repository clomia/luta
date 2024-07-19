<script lang="ts">
  import { MyIterable } from "$lib";

  // 예제 사용법
  const iterable = new MyIterable<number>(1, 2, 3, 4, 5);

  // for..of 루프 사용
  for (const value of iterable) {
    console.log(value);
  }

  // 스프레드 연산자 사용
  const allValues = [...iterable];
  console.log(allValues);
  // 디스트럭처링 사용
  const [first, second, ...rest] = iterable;
  console.log(first, second, rest);
</script>

<h1>Welcome to Lutaa</h1>

{#each allValues as value }
  <h3>{value}</h3>
{/each}
