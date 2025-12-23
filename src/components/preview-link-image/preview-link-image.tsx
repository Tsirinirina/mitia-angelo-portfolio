import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./preview-link-image.module.css";
import Loader from "../loader/loader";
import Image from "next/image";
import UseWindowSize from "@/hooks/window.size";

interface PreviewLinkImageProps {
  imageUrl: string;
  previewUrl: string;
}

const PreviewLinkImage: React.FC<PreviewLinkImageProps> = ({
  imageUrl,
  previewUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const windowsSize = UseWindowSize().width;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleIframeLoad = () => setIsLoading(false);

  const Modal = () =>
    createPortal(
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          {isLoading && (
            <div className={styles.loader}>
              <Loader size={32} />
            </div>
          )}
          <iframe
            src={previewUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Aperçu du site Web"
            onLoad={handleIframeLoad}
            style={{ display: isLoading ? "none" : "block" }}
          />
          <button className={styles.closeButton} onClick={closeModal}>
            Fermer
          </button>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <div className={styles.container}>
        <Image
          src={imageUrl}
          width={windowsSize > 736 ? 320 : 400}
          height={210}
          alt={"image de'aperçu"}
          className={styles.image}
          priority
          onClick={openModal}
        />
        <div
          className={` lexend-deca ${styles.previewAction}`}
          onClick={openModal}
        >
          Voir l'aperçu
        </div>
      </div>
      {isModalOpen && <Modal />}
    </>
  );
};

export default PreviewLinkImage;
