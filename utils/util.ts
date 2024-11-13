export async function loadWorkItems() {
  const result = await fetch("/api/workItems");

  if (!result.ok) {
    throw new Error(`Failed to fetch work items: ${result.statusText}`);
  }

  return await result.json();
}
