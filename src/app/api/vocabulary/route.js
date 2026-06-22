export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const level = searchParams.get('level');
    const page = searchParams.get('page') || '1';
    const keyword = searchParams.get('keyword');

    if (keyword) {
        const res = await fetch(
            `https://jisho.org/api/v1/search/words?keyword=${encodeURIComponent(keyword)}`
        );
        const data = await res.json();
        return Response.json(data);
    }

    const res = await fetch(
        `https://jisho.org/api/v1/search/words?keyword=%23jlpt-${level}&page=${page}`
    );
    const data = await res.json();
    return Response.json(data);
}