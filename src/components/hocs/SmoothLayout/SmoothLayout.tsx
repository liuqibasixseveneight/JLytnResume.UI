import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type Props = {
  children: ReactNode;
};

export const SmoothLayout = ({ children }: Props) => {
  const smootherRef = useRef<ReturnType<typeof ScrollSmoother.create> | null>(
    null,
  );

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      content: '#smooth-content',
      effects: true,
      normalizeScroll: true,
      smooth: 1.2,
      smoothTouch: 0.2,
      wrapper: '#smooth-wrapper',
    });
    smootherRef.current = smoother;

    return () => {
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const smoother = smootherRef.current;
    if (!smoother) return;

    const isPop = navigationType === 'POP';
    const isReturningHome = pathname === '/';

    const runAfterLayout = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const sm = smootherRef.current;
          if (!sm) return;

          if (!isPop) {
            sm.scrollTo(0, true);
            ScrollTrigger.refresh();
            return;
          }

          if (isReturningHome) {
            const projectName = sessionStorage.getItem('scrollToProject');
            if (projectName) {
              sessionStorage.removeItem('scrollToProject');
              const scrollToProjectSection = () => {
                const content = document.getElementById('smooth-content');
                const el = content?.querySelector(
                  `[data-project-name="${projectName}"]`
                ) as HTMLElement | null;
                if (el && smootherRef.current) {
                  const currentScroll = smootherRef.current.scrollTop();
                  const elTop = el.getBoundingClientRect().top;
                  const targetScroll = Math.max(
                    0,
                    currentScroll + elTop - 120
                  );
                  smootherRef.current.scrollTo(targetScroll, true);
                }
                ScrollTrigger.refresh();
              };
              setTimeout(scrollToProjectSection, 80);
              return;
            }
            sm.scrollTo(0, true);
          }

          ScrollTrigger.refresh();
        });
      });
    };

    runAfterLayout();
  }, [pathname, navigationType]);

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  );
};
