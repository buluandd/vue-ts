<script lang="ts">
import API from '@/api';

const requestRes = async () => {
  let result = await API.login('zhangsan', '123456');
}

</script>