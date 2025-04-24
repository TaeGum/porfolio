export default function About() {
    return (
      <section id="about" className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-gray-900">이태검</h1>
        <p className="text-lg text-gray-600 mb-8">
          8년차 프론트엔드 개발자로서 사용자와 가장 가까운 기술을 다루며,<br />
          직관적이고 효율적인 인터페이스 설계에 열정을 가지고 있습니다.<br />
          다양한 도구와 언어 경험, 빠른 적응력, 데이터 기반 개발, 협업 중심의 문제 해결이 저의 강점입니다.<br />
          새로운 기술을 실무에 빠르게 적용하는 것을 즐깁니다.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mt-6">
          <li className="px-3 py-1 bg-white border rounded text-gray-800">TypeScript</li>
          <li className="px-3 py-1 bg-white border rounded text-gray-800">React</li>
          <li className="px-3 py-1 bg-white border rounded text-gray-800">Vue</li>
          <li className="px-3 py-1 bg-white border rounded text-gray-800">Next.js</li>
          <li className="px-3 py-1 bg-white border rounded text-gray-800">Node.js</li>
          <li className="px-3 py-1 bg-white border rounded text-gray-800">AWS</li>
        </ul>
        <div className="mt-8 text-gray-500 text-sm">
          Contact: suk0510@naver.com / 010-4474-1776
        </div>
      </section>
    );
  }
  